import { db } from './db';
import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from '../shared/schema';
import { eq } from 'drizzle-orm';
import { IStorage } from '../shared/storage-interface';

// Fallback in-memory storage for when database is not available
class MemStorage {
  private users = new Map<number, any>();
  private contactSubmissions = new Map<number, any>();
  private currentUserId = 1;
  private currentContactId = 1;

  async getUser(id: number) {
    return this.users.get(id);
  }

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: { username: string; password: string }) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: {
    name: string;
    email: string;
    company?: string | null;
    projectDetails: string;
    budgetRange?: string | null;
    timeline?: string | null;
  }) {
    const id = this.currentContactId++;
    const submission = {
      ...insertSubmission,
      company: insertSubmission.company || null,
      budgetRange: insertSubmission.budgetRange || null,
      timeline: insertSubmission.timeline || null,
      id,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
}

// Create a fallback memory storage
const memStorage = new MemStorage();

export class DbStorage implements IStorage {
  async getUser(id: number) {
    if (!db) return memStorage.getUser(id);
    
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0] || null;
  }

  async getUserByUsername(username: string) {
    if (!db) return memStorage.getUserByUsername(username);
    
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0] || null;
  }

  async createUser(insertUser: { username: string; password: string }) {
    if (!db) return memStorage.createUser(insertUser);
    
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactSubmission(insertSubmission: {
    name: string;
    email: string;
    company?: string | null;
    projectDetails: string;
    budgetRange?: string | null;
    timeline?: string | null;
  }) {
    if (!db) return memStorage.createContactSubmission(insertSubmission);
    
    const [submission] = await db.insert(contactSubmissions).values({
      ...insertSubmission,
      company: insertSubmission.company || null,
      budgetRange: insertSubmission.budgetRange || null,
      timeline: insertSubmission.timeline || null,
    }).returning();
    return submission;
  }

  async getAllContactSubmissions() {
    if (!db) return memStorage.getAllContactSubmissions();
    
    return db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
}

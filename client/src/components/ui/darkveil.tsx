import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";
import "./darkveil.css";

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;
#define iTime uTime
#define iResolution uResolution

vec4 buf[8];
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}

mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);

vec3 hueShiftRGB(vec3 col,float deg){
    vec3 yiq=rgb2yiq*col;
    float rad=radians(deg);
    float cosh=cos(rad),sinh=sin(rad);
    vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);
    return clamp(yiq2rgb*yiqShift,0.0,1.0);
}

vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}

vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
    buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);
    buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
    buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);
    buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);
    buf[0]=sigmoid(buf[0]);buf[1]=sigmoid(buf[1]);
    buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);
    buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);
    buf[2]=sigmoid(buf[2]);buf[3]=sigmoid(buf[3]);
    buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345357,-11.0829525,10.6849475),vec4(-17.26826,8.395698,10.476103,-18.12618),vec4(-1.6157508,-0.09767741,2.3832905,-2.6883779))*buf[2]+mat4(vec4(0.1675843,8.273218,3.6058326,11.077415),vec4(-11.027477,-3.6968446,2.9002101,3.4063025),vec4(29.893217,13.86637,-6.6085906,5.5618124),vec4(-0.12582144,3.7844334,-2.9761536,-2.6993668))*buf[3]+vec4(-0.33847922,2.2982578,-2.7671003,-1.8063889);
    buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.23031087,2.3893385,9.148797,-0.4847179),vec4(4.0138035,-0.55737144,6.1633463,6.4825335),vec4(0.99458873,1.5334148,4.4027824,2.9926338))*buf[2]+mat4(vec4(-9.2468815,20.04582,1.0194902,12.738464),vec4(-12.298748,10.6983995,-4.8765287,10.132668),vec4(-3.8906097,11.844978,-1.7654158,-3.3062224),vec4(4.5688043,-5.0080256,1.5068406,-2.8024306))*buf[3]+vec4(4.8070736,10.582764,5.0456676,0.4859929);
    buf[4]=sigmoid(buf[4]);buf[5]=sigmoid(buf[5]);
    buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.13648623,-11.055336,5.9085407),vec4(-7.4050274,5.188068,-16.016106,-8.524695),vec4(-0.004399955,8.251648,-2.7983227,-4.726329))*buf[2]+mat4(vec4(5.1956725,-1.6398895,0.41728222,-12.6843815),vec4(-4.9062915,7.7829056,7.5127616,-4.901145),vec4(0.6089598,-1.8267555,6.168854,2.8915226),vec4(-0.25863624,5.2710204,-1.6458651,-5.8690753))*buf[3]+mat4(vec4(9.7169695,5.007985,4.6728516,17.636574),vec4(-7.7988667,3.6695328,3.6844468,-6.8993535),vec4(-1.5574226,9.9738655,-4.6058454,7.0481324),vec4(1.3945465,-4.1715374,-6.2302446,-0.5905306))*buf[4]+mat4(vec4(5.061657,-0.30327058,4.1334763,-3.370648),vec4(5.5468726,15.088078,-9.439034,4.3537927),vec4(2.1092267,2.0924084,-5.3779254,-5.5778103),vec4(-7.3781433,-4.4698305,6.4877915,-2.1670897))*buf[5]+vec4(-4.2103105,-1.8808708,2.652051,-3.3397195);
    buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,-3.9663641,6.8062096,4.8399935),vec4(-8.2761345,-3.2462234,-1.0043359,1.9635735),vec4(3.6547616,0.01730633,10.267389,0.7655374))*buf[2]+mat4(vec4(-3.3928258,-8.8318205,0.045693874,-4.4073873),vec4(-4.3693833,11.012346,-4.6074643,0.2686361),vec4(-2.476804,-3.4628665,12.018616,-5.4845815),vec4(-4.7879167,-0.12012321,-8.3871565,-0.33651897))*buf[3]+mat4(vec4(-2.5032427,3.1064522,-5.9536643,0.39946413),vec4(-11.166641,-8.8488245,-2.6648705,-1.0850511),vec4(-7.8999004,0.72549564,-4.048414,-4.067729),vec4(3.9734654,-3.4675448,4.037081,-6.4624176))*buf[4]+mat4(vec4(5.2421956,-0.3988743,0.24851966,0.4905949),vec4(1.3778757,-16.16049,6.0244904,0.37843204),vec4(-0.8698096,-3.1623368,3.4203138,7.7506027),vec4(2.8527267,0.24654078,-1.6698251,-1.3816783))*buf[5]+vec4(5.9577723,-1.2915034,-0.3088675,4.2635803);
    buf[6]=sigmoid(buf[6]);buf[7]=sigmoid(buf[7]);
    buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.2726003,0.),vec4(0.8932993,0.74709785,1.5957015,0.))*buf[2]+mat4(vec4(-2.8717842,-2.4094536,-5.0019026,0.),vec4(-0.3334967,-0.29593158,-0.580267,0.),vec4(1.8623776,1.5624734,3.3140154,0.),vec4(-2.2728395,-1.88881,-4.062316,0.))*buf[3]+mat4(vec4(-0.7063353,-0.6008096,-1.205067,0.),vec4(-1.8877237,-1.5700071,-3.365924,0.),vec4(0.5618756,0.46979544,1.0040555,0.),vec4(-2.9071999,-2.4416208,-5.2200313,0.))*buf[4]+mat4(vec4(-3.1476927,-2.627267,-5.6331635,0.),vec4(-0.72764975,-0.6289968,-1.2485871,0.),vec4(-1.9074315,-1.5964134,-3.4130383,0.),vec4(-1.1507441,-0.9664076,-2.054755,0.))*buf[5]+mat4(vec4(-0.75070435,-0.6317896,-1.3434184,0.),vec4(3.1618128,2.649506,5.6681747,0.),vec4(-2.5033798,-2.0875623,-4.476296,0.),vec4(1.596915,1.3378279,2.859996,0.))*buf[6]+mat4(vec4(1.5844905,1.3254582,2.839479,0.),vec4(-3.083344,-2.5849292,-5.531084,0.),vec4(-2.5915935,-2.1649458,-4.630659,0.),vec4(0.8598074,0.7198029,1.5412607,0.))*buf[7]+vec4(0.036976427,0.028843969,0.0615524,0.);
    buf[0]=sigmoid(buf[0]);
    return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 uv=fragCoord/uResolution.xy*2.-1.;
    uv.y*=-1.;
    uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;
    fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));
}

void main(){
    vec4 col;mainImage(col,gl_FragCoord.xy);
    col.rgb=hueShiftRGB(col.rgb,uHueShift);
    float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.5+0.5;
    col.rgb*=1.-(scanline_val*scanline_val)*uScan;
    col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
    gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);
}
`;

interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
}

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}: DarkVeilProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value =
        ((performance.now() - start) / 1000) * speed;
      program.uniforms.uHueShift.value = hueShift;
      program.uniforms.uNoise.value = noiseIntensity;
      program.uniforms.uScan.value = scanlineIntensity;
      program.uniforms.uScanFreq.value = scanlineFrequency;
      program.uniforms.uWarp.value = warpAmount;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [
    hueShift,
    noiseIntensity,
    scanlineIntensity,
    speed,
    scanlineFrequency,
    warpAmount,
    resolutionScale,
  ]);

  return (
    <canvas
      ref={ref}
      className="darkveil-canvas"
    />
  );
}
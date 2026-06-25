//
const hexInput = document.getElementById('hex');
const rgbInput = document.getElementById('rgb');
const hslInput = document.getElementById('hsl');
const colorNameInput = document.getElementById('colorName');
const htmlSelect = document.getElementById('htmlColorSelect');
const preview = document.getElementById('preview');
const nameText = document.getElementById('nameText');
const hexText = document.getElementById('hexText');
const rgbText = document.getElementById('rgbText');
const hslText = document.getElementById('hslText');

// 建立HTML顏色名稱 ↔ HEX映射表
const colorMap = {
  black:'#000000',silver:'#C0C0C0',gray:'#808080',white:'#FFFFFF',
  maroon:'#800000',red:'#FF0000',purple:'#800080',fuchsia:'#FF00FF',
  green:'#008000',lime:'#00FF00',olive:'#808000',yellow:'#FFFF00',
  navy:'#000080',blue:'#0000FF',teal:'#008080',aqua:'#00FFFF',
  indianred:'#CD5C5C',lightcoral:'#F08080',salmon:'#FA8072',darksalmon:'#E9967A',
  lightsalmon:'#FFA07A',crimson:'#DC143C',firebrick:'#B22222',darkred:'#8B0000',
  orangered:'#FF4500',tomato:'#FF6347',darkorange:'#FF8C00',orange:'#FFA500',
  gold:'#FFD700',khaki:'#F0E68C',darkkhaki:'#BDB76B',yellowgreen:'#9ACD32',
  lawngreen:'#7CFC00',chartreuse:'#7FFF00',greenyellow:'#ADFF2F',darkgreen:'#006400',
  forestgreen:'#228B22',seagreen:'#2E8B57',mediumseagreen:'#3CB371',lightseagreen:'#20B2AA',
  springgreen:'#00FF7F',mediumspringgreen:'#00FA9A',palegreen:'#98FB98',lightgreen:'#90EE90',
  darkcyan:'#008B8B',turquoise:'#40E0D0',mediumturquoise:'#48D1CC',darkturquoise:'#00CED1',
  cadetblue:'#5F9EA0',steelblue:'#4682B4',cornflowerblue:'#6495ED',deepskyblue:'#00BFFF',
  skyblue:'#87CEEB',lightskyblue:'#87CEFA',dodgerblue:'#1E90FF',royalblue:'#4169E1',
  mediumblue:'#0000CD',darkblue:'#00008B',midnightblue:'#191970',lavender:'#E6E6FA',
  thistle:'#D8BFD8',plum:'#DDA0DD',violet:'#EE82EE',orchid:'#DA70D6',
  mediumorchid:'#BA55D3',darkorchid:'#9932CC',darkviolet:'#9400D3',indigo:'#4B0082',
  magenta:'#FF00FF',hotpink:'#FF69B4',deeppink:'#FF1493',palevioletred:'#DB7093',
  mediumvioletred:'#C71585',sienna:'#A0522D',chocolate:'#D2691E',peru:'#CD853F',
  sandybrown:'#F4A460',burlywood:'#DEB887',wheat:'#F5DEB3',tan:'#D2B48C',
  rosybrown:'#BC8F8F',gainsboro:'#DCDCDC',lightgray:'#D3D3D3',darkgray:'#A9A9A9',
  dimgray:'#696969',slategray:'#708090',lightslategray:'#778899',darkslategray:'#2F4F4F'
};

// HEX轉RGB
function hexToRgb(hex) {
  let r = parseInt(hex.slice(1,3),16);
  let g = parseInt(hex.slice(3,5),16);
  let b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}

// RGB轉HSL
function rgbToHsl(r,g,b){
  r/=255;g/=255;b/=255;
  let max=Math.max(r,g,b),min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){h=s=0;}
  else{
    let d=max-min;
    s=l>0.5?d/(2-max-min):d/(max+min);
    switch(max){
      case r:h=((g-b)/d+(g<b?6:0))/6;break;
      case g:h=((b-r)/d+2)/6;break;
      case b:h=((r-g)/d+4)/6;break;
    }
  }
  return {h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)};
}

// 透過顏色名稱取得HEX
function nameToHex(name){
  let n = name.trim().toLowerCase();
  return colorMap[n] || null;
}

// 更新所有顯示
function updateColor(sourceHex, sourceName=""){
  if(!/^#[0-9A-Fa-f]{6}$/.test(sourceHex))return;
  let rgb=hexToRgb(sourceHex);
  let hsl=rgbToHsl(rgb.r,rgb.g,rgb.b);

  preview.style.backgroundColor=sourceHex;
  hexInput.value=sourceHex;
  rgbInput.value=`rgb(${rgb.r},${rgb.g},${rgb.b})`;
  hslInput.value=`hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;

  hexText.textContent=sourceHex;
  rgbText.textContent=rgbInput.value;
  hslText.textContent=hslInput.value;

  if(sourceName){
    colorNameInput.value=sourceName;
    nameText.textContent=sourceName;
  }else{
    nameText.textContent="custom";
  }
}

// 1. 輸入HTML顏色名稱觸發轉換
colorNameInput.addEventListener('input',()=>{
  let name = colorNameInput.value;
  let hex = nameToHex(name);
  if(hex){
    updateColor(hex,name.toLowerCase());
    htmlSelect.value="";
  }
});

// 2. 下拉選擇顏色
htmlSelect.addEventListener('change',()=>{
  let hex = htmlSelect.value;
  if(hex){
    updateColor(hex);
    colorNameInput.value="";
  }
});

// 3. 手動輸入HEX
hexInput.addEventListener('input',()=>{
  updateColor(hexInput.value);
  colorNameInput.value="";
  htmlSelect.value="";
});

// 初始預設顏色
updateColor('#00bfff','deepskyblue');


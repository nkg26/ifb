class IFB_IMG{
  ROOT = "https://nkg26.github.io/ifb";
  
  getImgPathByName(name){
    retrun null;
  }

  getGeneralImgPathByCatName(name){
    const N = name.toLowerCase();
    const R = this.ROOT+ "\res\img";
    
    if(N === 'ac') return R+"\general\ac-split.webp";
    if(N === 'dw') return R+"\general\dw.webp";
    if(N === 'ref') return R+"\general\ref-1.webp";
    if(N === 'wm-fl') return R+"\general\wm-fl.webp";
    if(N === 'wm-tl') return R+"\general\wm-tl.webp";
    if(N === 'mov') return R+"\general\oven.webp";
    if(N === 'mow') return R+"\general\oven.webp";
    if(N === 'cd') return R+"\general\cd.webp";
    if(N === 'chimani') return R+"\general\chimani.webp";
    
    retrun null;
  }

  NAMES_WEBP = [
    "wm_fl\ELENA GXN 6510 CMS.webp",	"wm_fl\EXECUTIVE BHC 9014 SSLC.webp",	"wm_fl\EXECUTIVE BXN 9014K CMS.webp",	"wm_fl\EXECUTIVE MSN 9014K CMS.webp",	"wm_fl\EXECUTIVE MXN 9014K CMS.webp",
    "wm_fl\EXECUTIVE OXN 9014K CMS.webp",	"wm_fl\EXECUTIVE PLUS BXN 1114KH.webp",	"wm_fl\EXECUTIVE PLUS MBN 1014K CMS.webp",	"wm_fl\EXECUTIVE PLUS MXC 1014 SSL.webp",	"wm_fl\EXECUTIVE PLUS VSC 1014 SSL.webp",
    "wm_fl\EXECUTIVE PLUS VSG 1114.webp",	"wm_fl\EXECUTIVE PLUS ZBG 1173.webp",	"wm_fl\EXECUTIVE ZBN 963.webp",	"wm_fl\SENATOR BXN 8012K CMS.webp",	"wm_fl\SENATOR MBN 8012 CMS.webp",
    "wm_fl\SENATOR MBN 8014K CMS.webp",	"wm_fl\SENATOR MSN 8012K CMS.webp",	"wm_fl\SENATOR SXN 8012K CMS.webp",	"wm_fl\SERENA GXN 7012 CMS.webp",	"wm_fl\SERENA MBN 7012 CMS.webp",
    "wm_fl\SERENA MBN 7012K CMS.webp",	"wm_fl\SERENA MSN 7012K CMS.webp",	"wm_tl\TL100IN3SWID.webp",	"wm_tl\TL100NB2SID.webp",	"wm_tl\TL100RB2SID.webp",
    "wm_tl\TL111RB2SID.webp",	"wm_tl\TL121RB2SID.webp",	"wm_tl\TL650CB1ID.webp",	"wm_tl\TL700MB1.webp",	"wm_tl\TL701AG1ID.webp",
    "wm_tl\TL701AG1SID.webp",	"wm_tl\TL701CB1ID.webp",	"wm_tl\TL701EP1ID.webp",	"wm_tl\TL751MS2SID.webp",	"wm_tl\TL800AG1SID.webp",
    "wm_tl\TL800CB1SID.webp",	"wm_tl\TL801EP1.webp",	"wm_tl\TL801MS2ID.webp",	"wm_tl\TL801OG2SID.webp",	"wm_tl\TL900NB2SID.webp",
    "wm_tl\TL900OG2SWID.webp",	"wm_tl\TL901AG1ID.webp",			
  ];
  
  getImgByName(name){
    name = name.toUpperCase();
    name = name.replaceAll("\","");
    name = name.replaceAll("/","");
    name = name.replaceAll("  "," ");
    name = name.trim()+".webp";
    let A = this.NAMES_WEBP;
    
    for(let i=0;i<A.length;i++)
      if(A[i].includes(name)) return A[i];
    return null;
  }
    
  
}

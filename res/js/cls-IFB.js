class IFB{
  TEMP = {};
  
  ROOT = "https://nkg26.github.io/ifb";
  pathList = [
      { type:"Features", keyName:"wm_tl", rPath:"/res/features/features-wm-tl.txt"},
      { type:"Features", keyName:"wm_fl", rPath:"/res/features/features-wm-fl.txt"},
      { type:"Features", keyName:"ac", rPath:"/res/features/features-ac.txt"},
      { type:"Features", keyName:"ref", rPath:"/res/features/features-ref.txt"},
      { type:"Features", keyName:"mov", rPath:"/res/features/features-mov.txt"},
      { type:"Features", keyName:"dw", rPath:"/res/features/features-dw.txt"},
      { type:"Features", keyName:"cd", rPath:"/res/features/features-cd.txt"}, 
      { type:"Features", keyName:"ka", rPath:"/res/features/features-ka.txt"},


      { type:"dp", keyName:"ALL", rPath:"/res/dp/DP_ALL.txt"},
      { type:"dp", keyName:"wm_tl", rPath:"/res/dp/dp-wm-tl.txt"},
      { type:"dp", keyName:"wm_fl", rPath:"/res/dp/dp-wm-fl.txt"},
      { type:"dp", keyName:"ac", rPath:"/res/dp/dp-ac.txt"},
      { type:"dp", keyName:"ref", rPath:"/res/dp/dp-ref.txt"},
      { type:"dp", keyName:"mov", rPath:"/res/dp/dp-mov.txt"},
      { type:"dp", keyName:"dw", rPath:"/res/dp/dp-dw.txt"},
      { type:"dp", keyName:"cd", rPath:"/res/dp/dp-cd.txt"},
      { type:"dp", keyName:"ka", rPath:"/res/dp/dp-ka.txt"},
   
      { type:"dp", rPath:"/res/sapcodes/SAP-CODES-MRP-DP-2611.txt", dt:261100, has:"ALL"},
      { type:"dp", rPath:"/res/sapcodes/SAP-CODES-MRP-DP.txt", dt:261100, has:"ALL"},
      { type:"dp", rPath:"/res/sapcodes/SAP-CODES-MRP-DP-REF.txt",	dt:261100, has:"ALL,REF"},
    ];


  
  path_features_wm_tl = "/res/features/features-wm-tl.txt";
  path_features_wm_fl = "/res/features/features-wm-fl.txt";
  path_features_ac    = "/res/features/features-ac.txt";
  path_features_ref   = "/res/features/features-ref.txt";
  path_features_mov   = "/res/features/features-mov.txt";
  path_features_dw    = "/res/features/features-dw.txt";
  path_features_cd    = "/res/features/features-cd.txt";
  path_features_ka    = "/res/features/features-ka.txt";
  path_list_features_all = [this.path_features_wm_tl, this.path_features_wm_fl, this.path_features_ref, this.path_features_ac, this.path_features_mov, this.path_features_dw, this.path_features_cd, this.path_features_ka];


  

  path_dp_ALL   = "/res/dp/DP_ALL.txt";
  path_dp_wm_tl = "/res/dp/dp-wm-tl.txt";
  path_dp_wm_fl = "/res/dp/dp-wm-fl.txt";
  path_dp_ac    = "/res/dp/dp-ac.txt";
  path_dp_ref   = "/res/dp/dp-ref.txt";
  path_dp_mov   = "/res/dp/dp-mov.txt";
  path_dp_dw    = "/res/dp/dp-dw.txt";
  path_dp_cd    = "/res/dp/dp-cd.txt";
  path_dp_ka    = "/res/dp/dp-ka.txt";
  path_list_dp_all = [this.path_dp_wm_tl, this.path_dp_wm_fl, this.path_dp_ref, this.path_dp_ac, this.path_dp_mov, this.path_dp_dw, this.path_dp_cd, this.path_dp_ka];

  fullPath(rPath){
    return this.ROOT + rPath;
  }


  
  normalizeKey(KEY){
    let S = KEY.toLowerCase().replaceAll("  "," ");
    S = S.trim();
    if(S.includes("SAP Code".toLowerCase()))return "sapcode";
    if(S.includes("Model Name".toLowerCase()))return "name";
    if(S.includes("Description".toLowerCase()))return "name"; // ref
    if(S.includes("Finish Name".toLowerCase()))return "color"; // ref
    if(S.includes("Color / Finish".toLowerCase()))return "color";
    if(S.includes("MRP".toLowerCase()))return "mrp";
    if(S.includes("DP".toLowerCase()))return "dp"; 
    if(S.includes("BP".toLowerCase()))return "bp"; // billing price
    if(S.includes("MOP".toLowerCase()))return "mop";
    if(S.includes("Cap".toLowerCase()))return "capacity";
    if(S.includes("Capacity".toLowerCase()))return "capacity";

    return KEY; 
  }  

  // ifbImgObj  name se globally koi object exist hona chaheye..
  getImagePathByP(P){
    try{
      // agar class IFB_IMG  ka object exist karta hai to...
      return ifbImgObj.getImgPathByP(P);
    }catch(e){ console.log(" -- ifbImgObj   naam se globally object exist hona chaheye...");}
    return null;
  }

}




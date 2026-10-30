class IFB{
  ROOT = "https://nkg26.github.io/ifb";
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

  fullPath(relativePath){
    return this.ROOT + relativePath;
  }
}

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
  
}

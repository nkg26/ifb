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




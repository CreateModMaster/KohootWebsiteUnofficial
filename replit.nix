{ pkgs }: {
  deps = [
    pkgs.openssh
    pkgs.openssh_hpn
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}
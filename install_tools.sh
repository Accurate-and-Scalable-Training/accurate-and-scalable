#!/bin/sh

sudo python3 -m pip install semgrep
semgrep login
sudo semgrep install-semgrep-pro

go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

echo
echo
echo Docker Information:
docker info
echo 
echo 
echo Semgrep version:
semgrep --version
echo
echo Nuclei version:
nuclei --version
echo
echo

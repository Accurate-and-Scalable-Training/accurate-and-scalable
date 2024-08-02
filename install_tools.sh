#!/bin/sh

docker pull semgrep/semgrep
docker run -it semgrep/semgrep semgrep login

go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

echo
echo
echo Docker Information:
docker info
echo
echo Nuclei version:
nuclei --version
echo
echo

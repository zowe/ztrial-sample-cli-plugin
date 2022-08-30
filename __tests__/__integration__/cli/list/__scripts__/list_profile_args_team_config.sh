#!/bin/bash
set -e # fail the script if we get a non zero exit code
ZOWE_OPT_HOST=new.host.com zowe ztrial list profile-args --port 1337

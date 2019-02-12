#!/bin/bash

case "$INIT_CWD" in *eslint-config-trigo)
   echo Own Package. Exiting
    exit 0
esac

(pushd '../..' && install-peerdeps eslint-config-trigo --dev --only-peers && popd)

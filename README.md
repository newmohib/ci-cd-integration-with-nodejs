## update/install node version and check 

    1: curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    2: nvm install version



## Github Actions CI/CD Intigration 

    1: in github project => actions
    2: search nodejs app
    3: configure nodejs app as yml file or
        a: create a directory as .github/workflows/node.js.yml
        b: push this code in github
    4: go to setting => actions => runners
    5: creat "self hosted runner" app
    6: selet Runner image => like linux
    7: complete all command for 
        a: Download
        b: Configure

        c not ./run.sh

    8: sudo ./svc.sh install
    9: sudo ./svc.sh start

## faicing some error
    1: initilly do not add run command;
    2: node version did not install autometically
    3: if any erro then go to details pages

## Docs
    1: https://www.youtube.com/watch?v=3jXtTSnA8zw
    2: 
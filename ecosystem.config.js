const env = getEnvName();
const namespace  = "node-api"
var hosts = getHosts();

function getHosts () {
  console.log("env:", env);

  // valideting environment paramiters
  if (!env) {
    // throw new Error("Environment params not found!")
    return;
  };

  //diclaring all host
  const _hosts = {
    dev01: "3.0.149.77",
    dev02: ["3.0.149.77"]
  };

  const host = _hosts[env];
  if (!host) {
    throw new Error("Invalid host name!");
  };

  return host;
}

function getEnvName() {
  let index = process.argv.indexOf('--env');
  if (index < 0) return;
  return process.argv[index + 1];
}

module.exports = {
  apps: [
    {
      name: "node-api-sample",
      namespace,
      script: "app.js",
      // env: {
      //   NODE_ENV: "development",
      // },
      env_production: {
        NODE_ENV: "production",
      },
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "../shared/logs/err.log",
      out_file: "../shared/logs/output.log",
    }
  ],
  // Deployment Configuration

  deploy: {
    // "production" is the environment name
    devApi: {
      // SSH key path, default to $HOME/.ssh
      //key: "./mohib_aws.pem",
      // SSH user
      user: "ubuntu",
      // SSH host
      host: hosts,
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/dev",
      // GIT remote
      repo: "git@github.com:newmohib/nodejs-cluster-simple-example.git",
      // path in the server
      path: "/home/ubuntu/apps/node-sample",
      // Pre-setup command or path to a script on your local machine
      //'pre-setup': "apt-get install git ; ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      //'post-setup': "ls -la",
      // pre-deploy action
      //'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      // 'post-deploy': `npm i --prod && pm2 start`,
      'post-deploy': `npm i --prod && pm2 reload ${namespace} --update-env`,
    },
  }
}

// pm2 reload --update-env


// initial setup command if locla is any cange but nod commit then
// pm2 deploy devApi --force setup --env dev01

// initial setup command if do not any cnange locla
// pm2 deploy devApi --force setup --env dev01
// pm2 deploy production setup

// for run remote inatance and send params as key env
//  pm2 deploy devApi --env dev01

// get every commit uniq key for tag versins
// git rev-parse --short HEAD


// ssh key gen
// ssh-keygen -t ed25519 -C "newmohib@gmail.com"

// exicution comand
// pm2 deploy production --force exec "pwd"




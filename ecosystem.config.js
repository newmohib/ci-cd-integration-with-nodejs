module.exports = {
  apps: [
    {
      name: "node-sample",
      script: "./app.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "./logs/err.log",
      out_file: "./logs/output.log",
    }
  ],
  // Deployment Configuration

  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      key: "./mohib_aws.pem",
      // SSH user
      user: "ubuntu",
      // SSH host
      host: ["3.0.149.77"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/dev",
      // GIT remote
      repo: "https://github.com/newmohib/nodejs-cluster-simple-example.git",
      // path in the server
      path: "/home/ubuntu/apps/node-sample",
      // Pre-setup command or path to a script on your local machine
      //'pre-setup': "apt-get install git ; ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      'post-setup': "ls -la",
      // pre-deploy action
      'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      //'post-deploy': "npm install",
    },
  }
}

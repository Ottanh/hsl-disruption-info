source /home/ec2-user/.bash_profile
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /hsl
pm2 delete all
pm2 serve build 80 --spa
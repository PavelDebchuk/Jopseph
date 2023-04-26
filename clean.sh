# Remove all node modules
rm -rf node_modules
rm -rf server/node_modules
rm -rf app/node_modules

# Clean npm cache
npm cache clean --force

echo 'Done!'

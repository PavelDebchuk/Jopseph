# Install node modules
yarn
echo 'Main modules installed!'

yarn --cwd server
echo 'Back-end modules installed!'

yarn --cwd app
echo 'Front-end modules installed!'

echo 'Done!'

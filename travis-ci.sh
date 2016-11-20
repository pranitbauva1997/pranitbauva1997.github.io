bundle install
bundle exec jekyll build
bundle exec htmlproofer --http-status-ignore "999" _site/

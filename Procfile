web: node_modules/.bin/webpack --config webpack.local.config.js; python manage.py collectstatic --noinput; gunicorn --log-file=- family_timeline.wsgi:application


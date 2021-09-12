# CS490 Project
## Setup
For the back create a venv with `python 3 -m  venv [path to venv]`, then add
run `pip3 install -r requrements.txt` to install all the packages we should need
for the backend.

At this point you will want to set up the database. Go to Django/cs490backend
and run `python3 mangage.py migrate` and `python3 manage.py createsuper user.`
this will set up a super user that you can use for [django admin](http://127.0.0.1:8000/admin/)

At this point you should be able run `python3 mangage.py runserver` and get
into the backend. Let me know if I missed anything!

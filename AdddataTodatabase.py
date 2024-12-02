import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred,{
    'databaseURL': "https://face-recognition-459a6-default-rtdb.asia-southeast1.firebasedatabase.app/"
})

ref=db.reference('Students')
data = {
"987654":
        {
            "name": "Visarut Jaibun",
            "major": "IT",
            "starting_year": 2017,
            "total_attendance": 0,
            "standing": "G",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        },
"963852":
        {
            "name": "Elonmar",
            "major": "Robotics",
            "starting_year": 2017,
            "total_attendance": 1,
            "standing": "G",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        }
    


}
for key, value in data.items():
    ref.child(key).set(value)
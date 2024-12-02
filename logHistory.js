const fs = require('fs');
const readline = require('readline');

// กำหนดไฟล์ที่จะเก็บ log
const logFilePath = 'log.json';

// อ่านข้อมูลจาก Terminal (ใช้ readline interface)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ฟังก์ชันสำหรับบันทึกข้อมูล log
function logAttendance(newLog) {
  // อ่านไฟล์ log ที่มีอยู่แล้ว
  fs.readFile(logFilePath, 'utf8', (err, data) => {
    let logs = [];

    if (!err && data) {
      // ถ้าไฟล์มีอยู่แล้วให้ parse ข้อมูลเก่า
      logs = JSON.parse(data);
    }

    // เพิ่มข้อมูลใหม่เข้าไป
    logs.push(newLog);

    // เขียนข้อมูลกลับลงไฟล์
    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
      if (err) {
        console.error('Error writing log file:', err);
      } else {
        console.log('Log has been saved.');
      }
    });
  });
}

// อ่านข้อมูลจาก Terminal (แบบทีละบรรทัด)
rl.question('Enter student name: ', (name) => {
  rl.question('Enter major: ', (major) => {
    rl.question('Enter starting year: ', (starting_year) => {
      rl.question('Enter total attendance: ', (total_attendance) => {
        const newLog = {
          'last_attendance_time': new Date().toISOString(),
          'name': name,
          'major': major,
          'starting_year': parseInt(starting_year),
          'total_attendance': parseInt(total_attendance),
          'standing': 'G',
          'year': 4
        };

        // บันทึกข้อมูล log
        logAttendance(newLog);

        rl.close();
      });
    });
  });
});

function checkAttendance() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const lateMinutes = currentMinutes - 10;

    let attendanceMessage = '';

    if (currentHour < 10 || (currentHour === 10 && currentMinutes <= 5)) {
        attendanceMessage = 'Attendance marked: On time';
    } else if (currentHour === 10 && currentMinutes > 5) {
        attendanceMessage = 'Attendance marked: Late (Warning)';
    } else {
        attendanceMessage = 'Attendance marked: Late (Salary deduction)';
    }

    const attendanceContainer = document.getElementById('attendance');
    attendanceContainer.innerHTML = attendanceMessage;
}
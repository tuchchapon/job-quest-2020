Front-end Test

สิ่งที่ต้องส่งมาเป็นคำตอบ
1.Folder Structure ที่จะใช้ในการจัดวาง
2.Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
3.จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้
4.จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit
5.สามารถตอบเป็นภาษาไทยได้

**คำตอบ**

>ข้อ 1
Folder Structure ที่จะใช้ในการจัดวาง 
ตัวระบบ run ผ่าน App.js โดยมี Folder ที่ชื่อ components ไว้จัดเก็บหน้าในแต่ละหน้า
ใน Folder components จะมี MultistepForm.js เอาไว้เป็นตัวควบคุมหน้าแสดงผลโดยดึงหน้าแสดงผลจากใน Folder stepForm
ภายใน Folder stepForm จะมีไฟล์ดังนี้ 

1. information.js ใช้สำหรับแสดงผลหน้าเก็บข้อมูลส่วนตัว
2. Marathondata.js ใช้สำหรับแสดงผลหน้าเก็บข้อมูลเกี่ยวกับการวิ่ง
3. EmergencyContact.js ใช้สำหรับแสดงผลหน้าเก็บข้อมูลผู้ติดต่อฉุกเฉิน
4. Medicalinfo.js ใช้สำหรับแสดงผลหน้าเก็บข้อมูลทางการแพทย์
5. TShirt_size.js ใช้สำหรับแสดงผลหน้าเก็บข้อมูลไซซ์เสื้อ
6. Review.js ใช้สำหรับแสดงข้อมูลทั้งหมดและสามารถแก้ไขข้อมูลก่อนจะบันทึกข้อมูลเข้าสู่ระบบ 
7. submit.js หน้าแสดงข้อความตอบกลับการสมัคร

>ข้อ 2
Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
Library ที่เลือกใช้

1. reactstrap ใช้สำหรับการตกแต่งทั่วไป 
2. Material-ui ใช้สำหรับการตกแต่ง
3. React-hook-helper ใช้สำหรับการทำ multi step form
4. yup ใช้สำหรับการ validate ข้อมูลที่รับเข้ามา


>ข้อ 3
จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้

1. หน้า information.js มีการเก็บข้อมูลดังนี้
input type
select      prename_th,  ใช้เก็บคำนำหน้าชื่อโดยใช้ dropdown menu ที่มี 3 ตัวเลือก 'นาย,นาง,นางสาว'
text        firstName_th,ใช้เก็บชื่อภาษาไทย        ใช้ textField
text        lastName_th, ใช้เก็บนามสกุลภาษาไทย    ใช้ textField
text        firstName_en,ใช้เก็บชื่อภาษาอังกฤษ      ใช้ textField
text        lastName_en, ใช้เก็บนามสกุลภาษาอังกฤษ  ใช้ textField
date        birth_date,  ใช้เก็บวันเดือนปีเกิด        ใช้ textField
email       email,       ใช้เก็บอีเมลล์             ใช้ textField
number      id_card_no,  ใช้เก็บเลขบัตรประชาชน     ใช้ textField
text        address,     ใช้เก็บที่อยู่               ใช้ textField
number      phone,       ใช้เก็บเบอร์โทรติดต่อ       ใช้ textField
file        Recent_photo,ใช้สำหรับเก็บรูปถ่ายหน้าตรง
text        BIB,         ใช้เก็บชื่อบนเบอร์วิ่ง        ใช้ textField

2. หน้า marathon.js มีการเก็บข้อมูลดังนี้

radio        marathon_status ใช้เก็บข้อมูลการลงแข่งขัน Mini Marathon / Half Marathon / Full Marathon ของ User ใช้ radio button
time         expect_time ใช้เก็บข้อมูลเวลาที่จะจบในการวิ่งครั้งนี้ 

3. หน้า EmergencyContact.js มี่การเก็บข้อมูลดังนี้
input type
text      name1,     ใช้เก็บชื่อผู้ติดต่อฉุกเฉินคนที่ 1
text      lastname1, ใช้เก็บนามสกุลผู้ติดต่อฉุกเฉินคนที่ 1
text      relation1, ใช้เก็บความสัมพันธ์ของผู้ติดต่อฉุกเฉินคนที่ 1
number    phone1,    ใช้เก็บเบอร์โทรติดต่อของผู้ติดต่อฉุกเฉินคนที่ 1
text      name2,     ใข้เก็บชื่อผู้ติดต่อฉุกเฉินคนที่ 2
text      lastname2, ใช้เก็บนามสกุลผู้ติดต่อฉุกเฉินคนที่ 2
text      relation2, ใช้เก็บความสัมพันธ์ของผู้ติดต่อฉุกเฉินคนที่ 2
number    phone2,    ใช้เก็บเบอร์โทรติดต่อของผู้ติดต่อฉุกเฉินคนที่ 2

4. หน้า Medicalinfo.js มีการเก็บข้อมูลดังนี้
input type
radio          bloodgroup             ใช้เก็บหมู่เลือด
radio          medical_allergy_status ใช้เก็บสถานะการแพ้ยา
text           medical_allergy_detail ใช้เก็บรายละเอียดการแพ้ยา
radio          chronic_health_status  ใช้เก็บสถานะโรคประจำตัว
text           chronic_health_detail  ใช้เก็บรายละเอียดโรคประจำตัว
radio          surgery_status         ใช้เก็บสถานะการผ่าตัด
text           surgery_detail         ใช้เก็บรายละเอียดการผ่าตัด
radio          plan_having_baby       ใช้เก็บสถานะการวางแผนมีบุตร
radio          medicine_take_status   ใช้เก็บสถานะการทานยา
text           medicine_take_detail   ใช้เก็บรายละเอียดการทานยา
radio          injured_status         ใช้เก็บสถานะการบาดเจ็บ  
text           injured_detail         ใช้ในการเก็บรายละเอียดการบาดเจ็บ
radio          excercise_status       ใช้ในการเก็บสถานะการออกกำลังกาย
radio          Abnormal_status        ใช้เก็บสถานะความผิดปกติระหว่างออกกำลังกาย
text           Abnormal_detail        ใช้ในการเก็บรายละเอียดสถานะผิดปกติระหว่างออกกำลังกาย

5. หน้า TShirt_size.js มีการเก็บข้อมูลดังนี้
input type
radio          Shirt_size             ใช้ในการเก็บไซซ์เสื้อ ใช้ radio button เก็บ XS,S,M,L,XL,XXL,XXXL


>ข้อ 4 
จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit

1. หน้า information.js มีการตรวจสอบข้อมูลดังนี้

prename_th    ใช้ dropdown menu เลือกได้เพียง 1 ค่า
firstName_th  ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง, ตรวจสอบภาษาไทย
lastName_th   ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง  ,ตรวจสอบภาษาไทย
firstName_en  ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง ,ตรวจสอบภาษาอังกฤษ
lastName_en   ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง  ,ตรวจสอบภาษาอังกฤษ
birth_date    ใช้ textfield เก็บเป็น date ,ตรวจสอบค่าว่าง 
email         ใช้ textfield เก็บเป็น email ,ตรวจสอบค่าว่าง ,ตรวจสอบภาษาอังกฤษ
id_card_no    ใช้ textfield เก็บเป็น number ,ตรวจสอบค่าว่าง ,ตรวจสอบว่ามีจำนวนตัวเลขเท่ากับ 13 หลักหรือไม่
address       ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
phone         ใช้ textfield เก็บเป็น number ,ตรวจสอบค่าว่าง ,ตรวจสอบว่าเป็นตัวเลขจำนวน 10 หลักหรือไม่
file          ใช้ input เก็บเป็น file ,ตรวจสอบขนาดไม่ตำกว่า 300x300 pixel ,ตั้งค่าการเก็บรูปให้เป็น Square resolution
BIB           ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง ,ตรวจสอบว่ามีตัวอักษรมากกว่า 10 ตัวหรือไม่ 

2. หน้า marathon.js มีการตรวจสอบข้อมูลดังนี้

marathon_status ออออออออออผผออออออ
expect_time ใช้เtextfield เก็บเป็น time ,ตรวจสอบค่าว่าง

3. หน้า EmergencyContact.js มี่การตรวจสอบข้อมูลดังนี้

name1,     ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
lastname1, ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
relation1, ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
phone1,    ใช้ textfield เก็บเป็น number ,ตรวจสอบค่าว่าง,ตรวจสอบว่าเป็นตัวเลขจำนวน 10 หลักหรือไม่
name2,     ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
lastname2, ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
relation2, ใช้ textfield เก็บเป็น string ,ตรวจสอบค่าว่าง
phone2,    ใช้ textfield เก็บเป็น number ,ตรวจสอบค่าว่าง,ตรวจสอบว่าเป็นตัวเลขจำนวน 10 หลักหรือไม่

4. หน้า Medicalinfo.js มีการตรวจสอบข้อมูลดังนี้
input type
bloodgroup             ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง 
medical_allergy_status ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
medical_allergy_detail ถ้าสถานะมีการแพ้ยาให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 
chronic_health_status  ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
chronic_health_detail  ถ้าสถานะมีโรคประจำตัวให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 
surgery_status         ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
surgery_detail         ถ้าสถานะมีการผ่าตัดให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 
plan_having_baby       ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
medicine_take_status   ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
medicine_take_detail   ถ้าสถานะมีการทานยาเป็นประจำ ให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 
injured_status         ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
injured_detail         ถ้าสถานะมีการบาดเจ็บ/เจ็บป่วย ให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 
excercise_status       ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
Abnormal_status        ใช้ radio button เลือกค่าได้เพียง 1 ค่า ,ตรวจสอบค่าว่าง
Abnormal_detail        ถ้าสถานะมีอาการผิดปกติ ให้แสดง textfield เก็บเป็น string,ตรวจสอบค่าว่าง 

5. หน้า TShirt_size.js มีการตรวจสอบข้อมูลดังนี้
input type
Shirt_size             ใช้ radio button,เลือกค่าได้เพียง 1 ค่า, เก็บ XS,S,M,L,XL,XXL,XXXL

const achievementsData = [
  {
    id: 1,
    label: "Outstanding Student Volunteer Award",
    description: "Devansh Kothari, Tanmay Shah, and Lakshita Aggarwal",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/adea057229194203b84106dd9dbf057625643ba8-843x602.jpg",
    content:
      "Devansh Kothari, Tanmay Shah, and Lakshita Aggarwal have been recognized for their outstanding contributions to IEEE, with Devansh Kothari and Tanmay Shah receiving the Outstanding Student Volunteer Award, while Lakshita Aggarwal was honored with the prestigious Dr. J.K. Pal Memorial Award. Their dedication, leadership, and commitment to IEEE have made a meaningful impact on the community and reflect their exceptional spirit of service and excellence.",
  },
  {
    id: 2,
    label: "Outstanding Student Volunteer Award",
    description: "Devansh Kothari and Tanmay Shah",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/17acd18abe80b7d67b3cdefa891fca4faec767e0-1254x896.jpg",
    content:
      "Devansh Kothari and Tanmay Shah have been honored with the Outstanding Student Volunteer Award for their dedication, leadership, and valuable contributions to IEEE. Their active involvement, teamwork, and commitment to excellence have played an important role in strengthening the IEEE community and making a lasting impact throughout the session.",
  },
  {
    id: 3,
    label: "Outstanding Student Volunteer Award",
    description: "Tanmay Shah",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/cd0d074a89869758bee6a45c2f3cff8f1db9b41c-960x686.jpg",
    content:
      "Tanmay Shah has been honored with the Outstanding Student Volunteer Award for his remarkable dedication and active participation in IEEE MUJ. His efforts, leadership, and passion for service have contributed significantly to the community.",
  },
  {
    id: 4,
    label: "WIE Outstanding Student Volunteer Award",
    description: "Kashish Kumar",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/b04f5323372b33494826b5724cd32a124170016c-1086x1448.jpg",
    content:
      "Kashish Kumar was recognized with the Outstanding Student Volunteer Award for her outstanding contributions and dedication to IEEE MUJ. Her commitment, initiative, and consistent efforts reflect the spirit of student leadership and service.",
  },
  {
    id: 5,
    label: "WIE Outstanding Student Volunteer Award",
    description: "Shambhavi Sharma",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/a2d4df80912bb70b584d995c3e3c8fa0d0e7681e-1086x1448.jpg",
    content:
      "Shambhavi Sharma received the Outstanding Student Volunteer Award in recognition of her exceptional commitment and contributions to IEEE. Her enthusiasm, leadership, and collaborative spirit have been instrumental in creating a stronger IEEE community.",
  },
  {
    id: 6,
    label: "JK Pal and Outstanding Student Volunteer Award",
    description: "Sriansh Raj",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/719541515991f31db70387c5167951075d060a76-3024x4032.jpg",
    content:
      "Sriansh Raj has been honored with the JK Pal and Outstanding Student Volunteer Award for his relentless contributions to IEEE MUJ. His passion for technology, leadership skills, and dedication have played a crucial role in shaping the IEEE community at our university. This award is a testament to his remarkable efforts and commitment.",
  },
  {
    id: 7,
    label: "Network Student Award",
    description: "Aashi Sharma",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/ec4c1831012f3cefaa003bb409cb0e3462d5075c-3024x4032.jpg",
    content:
      "Aashi Sharma’s significant contributions to IEEE have been recognized with the IEEE Delhi Section Network Student Award. Her dedication to IEEE’s mission, along with her outstanding networking skills and initiatives, have made a meaningful impact on the student community.",
  },
  {
    id: 8,
    label: "JK Pal and Outstanding Student Volunteer Award",
    description: "Atul Raj Sharma",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/04ff9b198fe8ee361776da9d23c0facbe4e30355-3024x4032.jpg",
    content:
      "Atul Raj Sharma’s dedication and contribution to IEEE have been recognized with the JK Pal and Outstanding Student Volunteer Award. His ability to lead and innovate has made a lasting impact, inspiring fellow students to engage and grow in the IEEE community. Congratulations, Atul!",
  },
  {
    id: 9,
    label: "JK Pal and Outstanding Student Volunteer Award",
    description: "Rajveer Sanghvi",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/a0eda3d9dfe1647ffc1804f1780b090647c192cb-3024x4032.jpg",
    content:
      "Rajveer Sanghvi has received the JK Pal and Outstanding Student Volunteer Award in recognition of his outstanding commitment to IEEE MUJ. His contributions to technical events and volunteer efforts have been instrumental in fostering a vibrant IEEE ecosystem.",
  },
  {
    id: 10,
    label: "JK Pal and Outstanding Student Volunteer Award",
    description: "Utkarsh Rana",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/6e49d601d93645f8973a5da2e1f201dd4907972e-3024x4032.jpg",
    content:
      "Utkarsh Rana has been recognized with the JK Pal and Outstanding Student Volunteer Award for his exceptional dedication to IEEE initiatives. His proactive involvement and leadership have significantly enriched the IEEE community at MUJ.",
  },
  {
    id: 11,
    label: "Outstanding Student Volunteer Award",
    description: "Aarohi Manchanda",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/e0087b9d9490da4f699fa7e075a9e944ce230771-634x632.png",
    content:
      "Aarohi Manchanda has been recognized with the Outstanding Student Volunteer Award for her exceptional dedication to IEEE initiatives. Her proactive involvement and leadership have significantly enriched the IEEE community at MUJ.",
  },
  {
    id: 12,
    label: "JK Pal Award",
    description: "Ronak Modi",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/7b43cf628f2396a349c9dd31ad7b0f1c75d07571-614x608.png",
    content:
      "Ronak Modi has received the JK Pal Award in recognition of his outstanding commitment to IEEE MUJ. His contributions to technical events and volunteer efforts have been instrumental in fostering a vibrant IEEE ecosystem.",
  },
  {
    id: 13,
    label: "TAC Team Lead Delhi Section",
    description: "Vikramaditya Hiran",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/257462e4540e0481e8bad5d124f9809a6c155b2c-623x616.png",
    content:
      "Vikramaditya Hiran’s dedication and contribution to IEEE have been recognized with achieving TAC Team Lead position for Delhi Section. His ability to lead and innovate has made a lasting impact, inspiring fellow students to engage and grow in the IEEE community. Congratulations, Vikramaditya!",
  },
  {
    id: 14,
    label: "IEEE Exemplary Student Branch Award 2023",
    description: "IEEE SB Won exemplary student branch award 2023",
    image:
      "https://cdn.sanity.io/images/gcb0j4e6/production/425ca4b14ea6837bd9c42a56f98dda522c7c8f75-344x194.jpg",
    content:
      "The IEEE Student Branch's dedication and excellence have been recognized with the IEEE Exemplary Student Branch Award 2023 in Region 10 (Asia-Pacific). Their commitment to innovation, leadership, and community engagement has set a benchmark, inspiring students to contribute and grow within IEEE. Congratulations to the entire team on this remarkable achievement!",
  },
];

export default achievementsData;

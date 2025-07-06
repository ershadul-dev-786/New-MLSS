  <script>
    function toggleForm() {
      const form = document.getElementById('applicantForm');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }

    window.addEventListener('DOMContentLoaded', () => {
      const savedApplicants = JSON.parse(localStorage.getItem('applicants')) || [];
      savedApplicants.forEach((applicant, index) => renderApplicant(applicant, index));
    });

    document.getElementById('applicantForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const applicant = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        education: document.getElementById('education').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        location: document.getElementById('location').value,
        fatherOccupation: document.getElementById('fatherOccupation').value,
        mobile: document.getElementById('mobile').value,
        reference: document.getElementById('reference').value,
        photoUrl: document.getElementById('photoUrl').value
      };

      const applicants = JSON.parse(localStorage.getItem('applicants')) || [];
      applicants.push(applicant);
      localStorage.setItem('applicants', JSON.stringify(applicants));

      renderApplicant(applicant, applicants.length - 1);
      this.reset();
    });

    function renderApplicant(data, index) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${data.photoUrl}" alt="প্রার্থীর ছবি">
        <div class="info">
          <p><strong>নাম:</strong> ${data.name}</p>
          <p><strong>ঠিকানা:</strong> ${data.address}</p>
          <p><strong>পড়ালেখা:</strong> ${data.education}</p>
          <p><strong>বয়স:</strong> ${data.age} বছর</p>
          <p><strong>উচ্চতা:</strong> ${data.height}</p>
          <p><strong>ওজন:</strong> ${data.weight}</p>
          <p><strong>ইচ্ছুক কর্মস্থল:</strong> ${data.location}</p>
          <p><strong>বাবার পেশা:</strong> ${data.fatherOccupation}</p>
          <p><strong>মোবাইল:</strong> ${data.mobile}</p>
          <p><strong>রেফারেন্স:</strong> ${data.reference}</p>
        </div>
        <button class="delete-btn" onclick="deleteApplicant(${index})">বাদ দিন</button>
        <button class="delete-btn" style="top: 45px; background-color: darkorange;" onclick="editApplicant(${index})">✏️ এডিট</button>
      `;
      document.getElementById('applicantList').appendChild(card);
    }

    function deleteApplicant(index) {
      let applicants = JSON.parse(localStorage.getItem('applicants')) || [];
      applicants.splice(index, 1);
      localStorage.setItem('applicants', JSON.stringify(applicants));
      location.reload();
    }

    function editApplicant(index) {
      const applicants = JSON.parse(localStorage.getItem('applicants')) || [];
      const applicant = applicants[index];
      document.getElementById('name').value = applicant.name;
      document.getElementById('address').value = applicant.address;
      document.getElementById('education').value = applicant.education;
      document.getElementById('age').value = applicant.age;
      document.getElementById('height').value = applicant.height;
      document.getElementById('weight').value = applicant.weight;
      document.getElementById('location').value = applicant.location;
      document.getElementById('fatherOccupation').value = applicant.fatherOccupation;
      document.getElementById('mobile').value = applicant.mobile;
      document.getElementById('reference').value = applicant.reference;
      document.getElementById('photoUrl').value = applicant.photoUrl;
      deleteApplicant(index);
      document.getElementById('applicantForm').style.display = 'block';
    }
  </script>
        function calculateDateOfBirth() {
            var dates = document.getElementById("dates").value;
            var years = document.getElementById("years");
            var months = document.getElementById("months");
            var days = document.getElementById("days");

            if (!dates) return; 

            var birthDate = new Date(dates);
            var today = new Date();

            var y = today.getFullYear() - birthDate.getFullYear();

          
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0) {
                m += 12;
                y--;
            }

            var d = today.getDate() - birthDate.getDate();
            if (d < 0) {
                var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                d += lastMonth.getDate();
                m--;
            }

            years.innerHTML = `${y} `;
            months.innerHTML = `${m} `;
            days.innerHTML = `${d} `;
        }

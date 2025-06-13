// Enhanced JavaScript with animations and additional functionality
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById("content");
    const initialContent = contentDiv.innerHTML;
    const backToTopBtn = document.getElementById('backToTop');
    
    const branches = {
        // Computer Science Engineering
        cse: {
            title: "Computer Science Engineering - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/file/d/1KAROxOHvkjggr4AeHbM_LReUgpNjnIob/view?usp=sharing" },
                    { name: "BEE", link: "https://drive.google.com/file/d/1GSWv_fqBUHDA_qiAGhiH8D-NU5s0hye_/view?usp=drive_link" },
                    { name: "EGD", link: "https://drive.google.com/file/d/1AvgqEmxWMCGQoa3EZSNf87a-8u55qv0a/view?usp=drive_link" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" },
                    { name: "PHYSICS", link: "https://drive.google.com/file/d/1g0fp22oQ2EVmsUfZDbH0R4d5qujyigm3/view?usp=sharing" }
                ],
                2: [
                    { name: "PTU FINAL", link: "https://drive.google.com/file/d/16vZHc8S5AbNOFvF65alq2f5dk6Kal1UJ/view?usp=drive_link" },
                    { name: "WORKSHOP", link: "https://drive.google.com/file/d/15N5k5goTKO0vfAhMRawWxthqMc9TP8-G/view?usp=drive_link" },
                    { name: "M2", link: "https://drive.google.com/file/d/1WieDU-jMbw9-1R60RvNlsFjemoj1m5wA/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/file/d/179zTHM09TUwQ55FgzgaRq9USDuPZ2tPV/view?usp=drive_link" },
                    { name: "ENGLISH", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "CHEMISTRY", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" }
                ],
                3: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DOS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M3", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DE", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OOPS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                4: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "UHV", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "EVS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M4", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DAA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "COA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                5: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "SE", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "FLAT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ERP", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DBMS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "CN", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                6: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WC", link: "https://drive.google.com/file/d/1-jcJqAjoYRpj20B60x0ZLF09r-KxbJeb/view?usp=sharing" },
                    { name: "ML", link: "https://drive.google.com/file/d/1db55Rw2K1DEH13H86Xzu7E8sljbubm7W/view?usp=sharing" },
                    { name: "MAD", link: "https://drive.google.com/file/d/1QMbwS-ZKsSd-WiYsXNdtQSXKUAFxteBe/view?usp=sharing" },
                    { name: "CD", link: "https://drive.google.com/file/d/1drQp9NDtfklymIJ6Po88diJ1Ze1eberx/view?usp=sharing" },
                    { name: "CC", link: "https://drive.google.com/file/d/1-moIA_G8r6xpXje4laV0jgWFrYcNVTgl/view?usp=sharing" },
                    { name: "AI", link: "https://drive.google.com/file/d/1d_uuZtrkLsQ5gsjQp0GZeDNMzOMhDjxP/view?usp=sharing" }
                ],
                7: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "RS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "NSC", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "DWDM", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AWSN", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AGILE", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        },
    
        //Information Technology
        it: {
            title: "Information Technology - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "BEE", link: "https://drive.google.com/file/d/1GSWv_fqBUHDA_qiAGhiH8D-NU5s0hye_/view?usp=drive_link" },
                    { name: "EGD", link: "https://drive.google.com/file/d/1AvgqEmxWMCGQoa3EZSNf87a-8u55qv0a/view?usp=drive_link" },
                    { name: "PHYSICS", link: "https://drive.google.com/file/d/1g0fp22oQ2EVmsUfZDbH0R4d5qujyigm3/view?usp=sharing" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" }
                ],
                2: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WORKSHOP", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M2", link: "https://drive.google.com/file/d/1WieDU-jMbw9-1R60RvNlsFjemoj1m5wA/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ENGLISH", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "CHEMISTRY", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" }
                ],
                3: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DOS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M3", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DE", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OOPS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                4: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "UHV", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "EVS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M4", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DAA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "COA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                5: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "SE", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "FLAT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ERP", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DBMS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "CN", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                6: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WC", link: "https://drive.google.com/file/d/1-jcJqAjoYRpj20B60x0ZLF09r-KxbJeb/view?usp=sharing" },
                    { name: "ML", link: "https://drive.google.com/file/d/1db55Rw2K1DEH13H86Xzu7E8sljbubm7W/view?usp=drive_link" },
                    { name: "MAD", link: "https://drive.google.com/file/d/1QMbwS-ZKsSd-WiYsXNdtQSXKUAFxteBe/view?usp=sharing" },
                    { name: "CD", link: "https://drive.google.com/file/d/1drQp9NDtfklymIJ6Po88diJ1Ze1eberx/view?usp=sharing" },
                    { name: "CC", link: "https://drive.google.com/file/d/1-moIA_G8r6xpXje4laV0jgWFrYcNVTgl/view?usp=sharing" },
                    { name: "AI", link: "https://drive.google.com/file/d/1d_uuZtrkLsQ5gsjQp0GZeDNMzOMhDjxP/view?usp=sharing" }
                ],
                7: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "RS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "NSC", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "DWDM", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AWSN", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AGILE", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        },
    
        // Electronics and Communication Engineering
        ece: {
            title: "Electronics and Communication Engineering - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "ENGLISH", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "CHEMISTRY", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" },
                    { name: "WORKSHOP", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                2: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "BEE", link: "https://drive.google.com/file/d/1GSWv_fqBUHDA_qiAGhiH8D-NU5s0hye_/view?usp=drive_link" },
                    { name: "EGD", link: "https://drive.google.com/file/d/1AvgqEmxWMCGQoa3EZSNf87a-8u55qv0a/view?usp=drive_link" },
                    { name: "PHYSICS", link: "https://drive.google.com/file/d/1g0fp22oQ2EVmsUfZDbH0R4d5qujyigm3/view?usp=sharing" },
                    { name: "M2", link: "https://drive.google.com/file/d/1WieDU-jMbw9-1R60RvNlsFjemoj1m5wA/view?usp=drive_link" }
                ],
                3: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "NT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M3", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "EMW", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ED", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSD", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                4: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "UHV", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "EVS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "SS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "MPMC", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AC", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                5: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "PM", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSP", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "ADC", link: "https://drive.google.com/cse-sem2-link1" },
                ],
                6: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "WC", link: "https://drive.google.com/file/d/1-jcJqAjoYRpj20B60x0ZLF09r-KxbJeb/view?usp=sharing" },
                    { name: "OFC", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "MAE", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "C SHARP", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "CN", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        },
    
        // Mechanical Engineering
        me: {
            title: "Mechanical Engineering - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "ENGLISH", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "CHEMISTRY", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" },
                    { name: "WORKSHOP", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        },
    
        // Artificial Intelligence & Data Science
        ai_ds: {
            title: "Artificial Intelligence & Data Science - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "Chemistry", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" },
                    { name: "English", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" },
                    { name: "WORKSHOP", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                2: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "Physics", link: "https://drive.google.com/file/d/1g0fp22oQ2EVmsUfZDbH0R4d5qujyigm3/view?usp=sharing" },
                    { name: "BEE", link: "https://drive.google.com/file/d/1GSWv_fqBUHDA_qiAGhiH8D-NU5s0hye_/view?usp=drive_link" },
                    { name: "M2", link: "https://drive.google.com/file/d/1WieDU-jMbw9-1R60RvNlsFjemoj1m5wA/view?usp=drive_link" },
                    { name: "EGD", link: "https://drive.google.com/file/d/1AvgqEmxWMCGQoa3EZSNf87a-8u55qv0a/view?usp=drive_link" }
                ],
                3: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DE", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M3", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DOS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OPPS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                4: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DAA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M4", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "EVS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "UHV", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "COA", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                5: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "SCTR", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "PIP", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "FLAT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DBMS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AI", link: "https://drive.google.com/file/d/1d_uuZtrkLsQ5gsjQp0GZeDNMzOMhDjxP/view?usp=drive_link" }
                ],
                6: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ML", link: "https://drive.google.com/file/d/1db55Rw2K1DEH13H86Xzu7E8sljbubm7W/view?usp=drive_link" },
                    { name: "BIG DATA", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "DWDM", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        },
    
        // Artificial Intelligence & Machine Learning
        ai_ml: {
            title: "Artificial Intelligence & Machine Learning - Study Materials",
            semesters: {
                1: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "Chemistry", link: "https://drive.google.com/file/d/1aVuPGKnjJxFjvtMwpWUW5YAjQDDpj5wB/view?usp=drive_link" },
                    { name: "English", link: "https://drive.google.com/file/d/1iG_lw7v67DMgbTRyiReSKlCGb6ypHIOK/view?usp=drive_link" },
                    { name: "PPS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M1", link: "https://drive.google.com/file/d/1sVHFsey7d3lq8SBLsMNZ34YvachfoEFt/view?usp=drive_link" },
                    { name: "WORKSHOP", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                2: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "Physics", link: "https://drive.google.com/file/d/1g0fp22oQ2EVmsUfZDbH0R4d5qujyigm3/view?usp=sharing" },
                    { name: "BEE", link: "https://drive.google.com/file/d/1GSWv_fqBUHDA_qiAGhiH8D-NU5s0hye_/view?usp=drive_link" },
                    { name: "M2", link: "https://drive.google.com/file/d/1WieDU-jMbw9-1R60RvNlsFjemoj1m5wA/view?usp=drive_link" },
                    { name: "EGD", link: "https://drive.google.com/file/d/1AvgqEmxWMCGQoa3EZSNf87a-8u55qv0a/view?usp=drive_link" }
                ],
                3: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DSA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DE", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "M3", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DOS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OOPS", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                4: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DAA", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "M4", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "EVS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "UHV", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "OS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "COA", link: "https://drive.google.com/cse-sem2-link1" }
                ],
                5: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "SCTR", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "PIP", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "FLAT", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "DBMS", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "AI", link: "https://drive.google.com/file/d/1d_uuZtrkLsQ5gsjQp0GZeDNMzOMhDjxP/view?usp=drive_link" }
                ],
                6: [
                    { name: "PTU FINAL", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "ML", link: "https://drive.google.com/file/d/1db55Rw2K1DEH13H86Xzu7E8sljbubm7W/view?usp=drive_link" },
                    { name: "BIG DATA", link: "https://drive.google.com/cse-sem2-link2" },
                    { name: "DWDM", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "CN", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "MPMC", link: "https://drive.google.com/cse-sem2-link1" },
                    { name: "NN", link: "https://drive.google.com/cse-sem2-link1" }
                ]
            },
        }
    };

    // Add click event to branch cards
    document.querySelectorAll(".branch-card").forEach((card) => {
        card.addEventListener("click", (e) => {
            // Don't trigger if clicking on the view button
            if (!e.target.closest('.btn-view')) {
                const branch = card.dataset.branch;
                loadBranchContent(branch);
            }
        });
        
        // Add view button click handler
        const viewBtn = card.querySelector('.btn-view');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const branch = card.dataset.branch;
                loadBranchContent(branch);
            });
        }
    });

    // Load branch content with animations
    function loadBranchContent(branch) {
        const branchData = branches[branch];
        if (!branchData) return;

        // Fade out current content
        contentDiv.style.opacity = '0';
        contentDiv.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Create new content
            contentDiv.innerHTML = `
                <div class="max-w-4xl mx-auto fade-in">
                    <div class="flex items-center mb-8">
                        <button onclick="loadHome()" class="btn-secondary mr-4">
                            <i class="fas fa-arrow-left mr-2"></i> Back
                        </button>
                        <h2 class="text-3xl font-bold">${branchData.title}</h2>
                    </div>
                    
                    <div class="semesters-container">
                        ${Object.entries(branchData.semesters)
                            .map(([sem, subjects]) => `
                                <div class="semester-card fade-in" style="animation-delay: ${sem * 0.1}s">
                                    <h3>Semester ${sem}</h3>
                                    <div class="space-y-2 mt-4">
                                        ${subjects.map(subject => `
                                            <div class="subject">
                                                <p>${subject.name}</p>
                                                <a href="${subject.link}" target="_blank" class="download-link">
                                                    Download <i class="fas fa-download ml-1"></i>
                                                </a>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                    </div>
                </div>
            `;
            
            // Fade in new content
            setTimeout(() => {
                contentDiv.style.opacity = '1';
                contentDiv.style.transform = 'translateY(0)';
            }, 50);
            
            // Scroll to top
            window.scrollTo({
                top: contentDiv.offsetTop - 100,
                behavior: 'smooth'
            });
        }, 300);
    }

    // Load home page with animations
    window.loadHome = function() {
        contentDiv.style.opacity = '0';
        contentDiv.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            contentDiv.innerHTML = initialContent;
            
            // Reattach event listeners
            document.querySelectorAll(".branch-card").forEach((card) => {
                card.addEventListener("click", (e) => {
                    if (!e.target.closest('.btn-view')) {
                        const branch = card.dataset.branch;
                        loadBranchContent(branch);
                    }
                });
                
                const viewBtn = card.querySelector('.btn-view');
                if (viewBtn) {
                    viewBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const branch = card.dataset.branch;
                        loadBranchContent(branch);
                    });
                }
            });
            
            setTimeout(() => {
                contentDiv.style.opacity = '1';
                contentDiv.style.transform = 'translateY(0)';
            }, 50);
            
            window.scrollTo({
                top: contentDiv.offsetTop - 100,
                behavior: 'smooth'
            });
        }, 300);
    }

    // Back to top button functionality
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.branch-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
});

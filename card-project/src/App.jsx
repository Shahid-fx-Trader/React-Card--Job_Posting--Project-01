import Card from "./assets/component/Card";

const jobs = [
  {
    id: 1,
    companyName: "Amazon",
    logo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
    title: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    salary: "$40/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    companyName: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    salary: "$80/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyName: "Meta",
    logo: "https://imgs.search.brave.com/jkHweIx5ktBQNogZZGQtjdU4fMxDBLcYfHxs24Gnuhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkzLzI2/LzVmLzkzMjY1ZjAw/Y2NiMjQxNWZmMDk5/OTNjMzFkZWM4MWUx/LmpwZw",
    title: "React Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$90/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    companyName: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    title: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    salary: "$85/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    companyName: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    title: "Backend Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$100/hr",
    location: "Remote",
  },
  {
    id: 6,
    companyName: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    salary: "$50/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    companyName: "Tesla",
    logo: "https://imgs.search.brave.com/_KfZMxn9tdl0DE1B1jei312p4HMWHa7CP73wbiJqdlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYWJi/aXRsb2dvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MC90ZXNsYS1sb2dv/LTItODAweDQ1MC5q/cGc",
    title: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Remote",
  },
  {
    id: 8,
    companyName: "Adobe",
    logo: "https://imgs.search.brave.com/YFUwfwZ7fRKDMg6SrhUJcXfHItowrxq5c3TwmZxTNWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAwLzQxLzE3/LzM2MF9GXzMwMDQx/MTcxOF9BVnhhYUFG/T1JVbXlXU2ZHakVU/NW9TRTRjanRnejJB/ei5qcGc",
    title: "Product Designer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    salary: "$70/hr",
    location: "Pune, India",
  },
  {
    id: 9,
    companyName: "Uber",
    logo: "https://imgs.search.brave.com/5qOrxTo-36NuK1RIyaWDLXjOoamQarfvHGwGx8NhyYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0FW/U251azRFZ0VhWjJr/bXBnaVMyU2ouanBn",
    title: "Data Analyst",
    tag1: "Full-Time",
    tag2: "Junior Level",
    salary: "$45/hr",
    location: "Mumbai, India",
  },
  {
    id: 10,
    companyName: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    title: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    salary: "$95/hr",
    location: "Remote",
  },
];
const App = () => {
  return (
    <div className="parent">
      {jobs.map(function (job) {
        return (
          <Card
            companyName={job.companyName}
            logo={job.logo}
            title={job.title}
            tag1={job.tag1}
            tag2={job.tag2}
            salary={job.salary}
            location={job.location}
          />
        );
      })}
    </div>
  );
};

export default App;

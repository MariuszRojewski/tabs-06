import React from 'react';
const url = 'https://course-api.com/react-tabs-project';
import JobInfo from './Jobinfo';
import BtnContainer from './Btncontainer'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [jobs, setJobs] = React.useState([]);
  const [currentItem, setCurrentItem] = React.useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setIsLoading(false);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if(isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
  );
  }

  return(
    <section className='jobs-center'>
      <BtnContainer 
        jobs={jobs} 
        currentItem={currentItem} 
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
};
export default App;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();
  
  const [jobAdvertisement, setJobAdvertisement] = useState({});
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById()
      .then((result) => setJobAdvertisement(result.data.data));
  },[]);

  return (
    <div>
        {jobAdvertisement.id}
      
    </div>
  );
}
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../store/applicantsSlice";
import ApplicantCard from "../components/ApplicantCard";
import AddApplicantForm from "../components/AddApplicantForm";

const stages = ["Applied", "Interview", "Offer", "Rejected"];

export default function Applicants() {
  const applicants = useSelector((state) => state.applicants);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <AddApplicantForm />

      <div className="grid grid-cols-4 gap-4 mt-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-gray-100 p-3 rounded">
            <h3 className="font-semibold mb-2">{stage}</h3>

            {applicants
              .filter((a) => a.status === stage)
              .map((app) => (
                <ApplicantCard
                  key={app.id}
                  applicant={app}
                  onMove={(newStatus) =>
                    dispatch(updateStatus({ id: app.id, status: newStatus }))
                  }
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

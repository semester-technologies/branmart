import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  type: string;
  time: string;
  date: string;
}

const defaultAppointments: Appointment[] = [
  { id: "1", name: "Emily Watson",  type: "Emergency Dental",            time: "09:00", date: "2026-03-02" },
  { id: "2", name: "John Peterson", type: "Dental Cleaning",             time: "10:30", date: "2026-03-03" },
  { id: "3", name: "Lisa Chen",     type: "Invisalign Consultation",     time: "14:00", date: "2026-03-04" },
  { id: "4", name: "Robert Kim",    type: "Dental Implant Consultation", time: "11:00", date: "2026-03-05" },
];

export default function UpcomingAppointments({
  appointments = defaultAppointments,
}: {
  appointments?: Appointment[];
}) {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#241717]">
          Upcoming Appointments
        </h2>
        <Link
          href="/appointments"
          className="text-sm font-medium text-[#cc3602] hover:underline"
        >
          View All
        </Link>
      </div>

      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2 text-sm text-gray-400">
          <Calendar size={22} className="text-gray-300" />
          No upcoming appointments
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {appointments.map((a) => (
          <div key={a.id} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
              <Calendar size={16} className="text-[#cc3602]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#241717] truncate">
                {a.name}
              </p>
              <p className="text-xs text-gray-400">{a.type}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-medium text-gray-700 flex items-center justify-end gap-1">
                <Clock size={11} className="text-gray-400" /> {a.time}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{a.date}</p>
            </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

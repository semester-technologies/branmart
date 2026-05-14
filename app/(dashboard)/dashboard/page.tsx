import { cn } from "@/src/lib/cn";
import WelcomeHeader from "@/src/components/dashboard/overview/WelcomeHeader";
import StatCards from "@/src/components/dashboard/overview/StatCards";
import YourWebsites from "@/src/components/dashboard/overview/YourWebsites";
import RecentLeads from "@/src/components/dashboard/overview/RecentLeads";
import UpcomingAppointments from "@/src/components/dashboard/overview/UpcomingAppointments";
import DashboardAlertBanner from "@/src/components/dashboard/overview/DashboardAlertBanner";
import SubscriptionExpiredState from "@/src/components/dashboard/overview/SubscriptionExpiredState";

export const metadata = { title: "Dashboard" };

type AlertState = "none" | "trial" | "expired";

const ALERT_STATE: AlertState = "none"; // Change to "trial" or "none" to test different states
const TRIAL_BUSINESS = "Sarah's Wellness Studio";
const TRIAL_DAYS_LEFT = 5;
const EXPIRED_BUSINESS = "Downtown Coffee Co.";

export default function DashboardPage() {
  const isExpired = ALERT_STATE === "expired";

  return (
    <>
      {ALERT_STATE === "trial" && (
        <DashboardAlertBanner
          variant="trial"
          businessName={TRIAL_BUSINESS}
          daysLeft={TRIAL_DAYS_LEFT}
        />
      )}
      {ALERT_STATE === "expired" && (
        <DashboardAlertBanner
          variant="expired"
          businessName={EXPIRED_BUSINESS}
        />
      )}

      <div className="px-4 sm:px-6 lg:px-10 py-8 flex flex-col gap-8">
        <WelcomeHeader disabled={isExpired} />

        {isExpired && (
          <SubscriptionExpiredState businessName={EXPIRED_BUSINESS} />
        )}

        <div
          className={cn(
            "flex flex-col gap-8",
            isExpired && "opacity-40 pointer-events-none select-none",
          )}
          aria-hidden={isExpired || undefined}
        >
          <StatCards />
          <YourWebsites />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <RecentLeads />
            <UpcomingAppointments
              appointments={isExpired ? [] : undefined}
            />
          </div>
        </div>
      </div>
    </>
  );
}

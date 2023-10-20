import { topics } from "~/utils/const";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

export default function Topics() {
  return (
    <SidebarSection title="Trends for you" more="/trends">
      {topics.map((topic, index) => (
        <Topic key={index} item={topic} />
      ))}
    </SidebarSection>
  );
}

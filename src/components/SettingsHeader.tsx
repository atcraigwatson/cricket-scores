
import SettingsButtons from './SettingsButtons';
import OffCanvas from './OffCanvas';

export default function SettingsHeader() {
  return (
    <header className="text-bg-dark">
      <SettingsButtons />
      <OffCanvas />
    </header>
  );
}
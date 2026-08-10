import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Contact from './sections/Contact';

import { roles, portfolioData } from './data/portfolioData';
import './App.css';

export default function App() {
  const [selectedRole, setSelectedRole] = useState('data_scientist');

  const currentRoleObj = roles.find((r) => r.id === selectedRole) || roles[0];
  const activeRoleLabel = currentRoleObj.label;
  const currentRoleData = portfolioData[selectedRole] || portfolioData.data_scientist;

  const handleRoleChange = (newRole) => {
    setSelectedRole(newRole);
  };

  return (
    <div className="app">
      <Navbar
        selectedRole={selectedRole}
        onRoleChange={handleRoleChange}
        roles={roles}
      />

      <main>
        <Hero
          selectedRole={selectedRole}
          onRoleChange={handleRoleChange}
          roles={roles}
          data={currentRoleData}
        />

        <Experience
          data={currentRoleData}
          activeRoleLabel={activeRoleLabel}
        />

        <Skills
          data={currentRoleData}
          activeRoleLabel={activeRoleLabel}
        />

        <Projects
          data={currentRoleData}
          activeRoleLabel={activeRoleLabel}
        />

        <Publications />

        <Contact />
      </main>
      {/* Footer removed */}
    </div>
  );
}

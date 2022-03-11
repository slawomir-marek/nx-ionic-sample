import { CapacitorProject } from '@capacitor/project';
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  ios: {
    path: 'ios',
  },
  android: {
    path: 'android',
  },
};

const updateAndroidProject = async() => {
  const project = new CapacitorProject(config);
  await project.load();

  console.log(project);

  /* Place for our actions */
}

updateAndroidProject();

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
  // await project.android?.setPackageName('nx.ionic.sample');
  // await project.android?.setVersionName('1.0.1');

  const appBuildGradleFile = project.android?.getGradleFile('app/build.gradle');

  const versionCode = await appBuildGradleFile?.getVersionCode();
  const versionName = await appBuildGradleFile?.getVersionName();

  console.log('version code: ' + versionCode);
  console.log('version name: ' + versionName);

  await appBuildGradleFile?.setVersionCode(2);
  await appBuildGradleFile?.setVersionName('2.0');

  project.commit();
}

updateAndroidProject();

import {TouchableOpacity} from 'react-native';
import screenSnapshotCreator from '../../../jestHelpers/screenSnapshotCreator';
import screenRender from '../../../jestHelpers/screenRender';
import {act} from 'react-test-renderer';

import Hello from '../Hello';

it('renders correctly with defaults', async () => {
  const screen = screenSnapshotCreator(Hello);
  expect(screen).toMatchSnapshot();
});

it('adding five on click', async () => {
  const screen = await screenRender(Hello);
  const label = screen.root.findByProps({testID: 'myTestId'});
  const plus = screen.root.findAllByType(TouchableOpacity)[0];
  const minus = getButtonByLabel(screen, 'minus');
  const initialValue = label.props.children;
  act(() => {
    plus.props.onPress();
  });
  const addTest = label.props.children === initialValue + 5;
  expect(addTest).toBeTruthy();
  act(() => {
    minus.props.onPress();
  });
  const subtractTest = label.props.children === initialValue + 5 - 1;
  expect(subtractTest).toBeTruthy();
});

it('subtracting one on click', async () => {
  const screen = await screenRender(Hello);
  const label = screen.root.findByProps({testID: 'myTestId'});
  const minus = getButtonByLabel(screen, 'minus');
  const initialValue = label.props.children;
  act(() => {
    minus.props.onPress();
  });
  const subtractTest = label.props.children === initialValue - 1;
  expect(subtractTest).toBeTruthy();
});

const getButtonByLabel = (screen, label: string) => {
  const buttonList = screen.root.findAllByType(TouchableOpacity);
  const matchingButton = buttonList.filter((button) =>
    button?.props?.children?.props?.children === label ? true : false,
  );

  if (matchingButton.length > 1) {
    expect(true).toBeFalsy();
  } else {
    return matchingButton[0];
  }
};

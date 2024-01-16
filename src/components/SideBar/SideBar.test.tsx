import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import SideBarComponent from './SideBar.component';

const mockProps = {
  userName: 'Test user name',
  userId: 1
}

describe('tests for SideBar component', () => {
  it('should render SideBarComponent with received props', () => {
    render(
      <SideBarComponent 
        userName={mockProps.userName} 
        userId={mockProps.userId}
      />
    );
    const displayedUserName = screen.getByText('Test user name');
    const displayedUserId = screen.getByTestId('sidebar-user-id')
    expect(displayedUserName).toBeInTheDocument();
    expect(displayedUserId).toBeInTheDocument();
  })
})
import React, {useCallback, useEffect, useState} from 'react';
import {ArrowRight, Plus, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import Addmemberform from './Addmemberform';

const Member = () => {
  const [membersList, setmembersList] = useState([
    {
      name: 'James Jhones',
      DateOfBirth: 'Dec 8, 1986',
      city: 'California',
      CIN: '837465',
      MIF: 'Lacare, May 2023',
      Accounts: '3523',
      MIFstatus: 'active',
      Enrollmentstatus: 'Enrolled',
      checked: false,
    },
    {
      name: 'James Jhones',
      DateOfBirth: 'Dec 8, 1986',
      city: 'California',
      CIN: '837465',
      MIF: 'Lacare, May 2023',
      Accounts: '3523',
      MIFstatus: 'inacive',
      Enrollmentstatus: 'Excluded',
      checked: false,
    },
    {
      name: 'James Jhones',
      DateOfBirth: 'Dec 8, 1986',
      city: 'California',
      CIN: '837465',
      MIF: 'Lacare, May 2023',
      Accounts: '3523',
      MIFstatus: 'active',
      Enrollmentstatus: 'pending',
      checked: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedmembers, setSelectedmembers] = useState(0);
  const [ismemberModalVisible, setmemberIsModalVisible] = useState(false);
  console.log(loading);
  const debounceFn = useCallback(
    debounce(() => {
      setLoading(true);
    }, DEBOUNCE_DELAY),
    [meta.search],
  );

  const handleSetSearchQuery = value => {
    setMeta(prevMeta => ({...prevMeta, search: value}));
    debounceFn();
  };

  const handlePageChange = value => {
    setMeta(prevMeta => ({...prevMeta, page: value}));
    setLoading(true);
  };

  const handlememberSubmission = member => {
    setmembersList(prevList => [
      ...prevList,
      {
        name: member.name,
        DateOfBirth: member.DateOfBirth,
        city: member.city,
        CIN: member.CIN,
        MIF: member.MIF,
        Accounts: member.Accounts,
        MIFstatus: member.MIFstatus,
        Enrollmentstatus: member.Enrollmentstatus,
        checked: false,
      },
    ]);
    handleClosememberModal();
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = membersList.map(checkbox => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setmembersList(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = index => {
    setmembersList(prevList =>
      prevList.map((item, itemIndex) => (itemIndex === index ? {...item, checked: !item.checked} : item)),
    );
  };

  const handleClosememberModal = () => {
    setmemberIsModalVisible(false);
  };

  const handleOpenmemberModal = () => {
    setmemberIsModalVisible(true);
  };

  useEffect(() => {
    setSelectedmembers(
      selectAll
        ? membersList.length
        : membersList.reduce((accumulator, item) => {
            if (item.checked) {
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [membersList, selectAll]);

  return (
    <>
      <TableWrapper
        searchPlaceholder="Search Lead Care Managers"
        setSearhQuery={handleSetSearchQuery}
        searchValue={meta.search}
        totalListCount={100}
        pageSize={meta.perPage}
        currentPage={meta.page}
        onPageChange={handlePageChange}
        selectedItems={selectedmembers}
        actionButtons={
          selectedmembers > 0
            ? [
                {
                  label: `Delete ${selectedmembers} Items`,
                  classes: 'danger-btn',
                  icon: <TrashSimple size={24} className="me-3" />,
                  handleClick: () => {},
                },
              ]
            : [
                {
                  label: 'Upload File',
                  classes: 'secondary-btn',
                  icon: <UploadSimple size={24} className="me-3" />,
                  handleClick: () => {},
                },
                {
                  label: 'Add Members',
                  classes: 'primary-btn',
                  icon: <Plus size={24} className="me-3" />,
                  handleClick: () => {
                    console.log('clicked');

                    handleOpenmemberModal();
                  },
                },
              ]
        }
      >
        <div className="container-fluid py-4">
          <div className="table-responsive">
            <table className="table table-rows">
              <thead className="table-header">
                <tr>
                  <th>
                    <div className="form-check ps-3 mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </div>
                  </th>
                  <th>Name</th>
                  <th>DateofBirth</th>
                  <th>City</th>
                  <th>CIN</th>
                  <th>MIF</th>
                  <th>Account#</th>
                  <th>MIF Status</th>
                  <th>Enrollment Status</th>
                </tr>
              </thead>
              <tbody>
                {membersList.map((member, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check ps-3 mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={member.checked}
                          onChange={() => handleCheckboxChange(index)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>{member.name}</td>
                    <td>{member.DateOfBirth}</td>
                    <td>{member.city}</td>
                    <td>{member.CIN}</td>
                    <td>{member.MIF}</td>
                    <td>{member.Accounts}</td>
                    <td>
                      <div className={`status ${member.MIFstatus === 'active' ? 'active' : 'inactive'}`}>
                        {member.MIFstatus}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`status ${
                          member.Enrollmentstatus === 'Enrolled'
                            ? 'Enrolled'
                            : member.Enrollmentstatus === 'Excluded'
                            ? 'Excluded'
                            : 'pending'
                        }`}
                      >
                        {member.Enrollmentstatus}
                      </div>
                    </td>

                    <td>
                      <button className="secondary-btn">
                        start survey
                        <ArrowRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TableWrapper>
      {ismemberModalVisible && (
        <CustomModal size="sm" show onHide={handleClosememberModal} heading="Add Question">
          <Addmemberform handleQuestionSubmittion={handlememberSubmission} handleClose={handleClosememberModal} />
        </CustomModal>
      )}
    </>
  );
};

export default Member;

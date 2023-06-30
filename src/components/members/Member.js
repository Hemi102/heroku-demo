import React, {useCallback, useEffect, useState} from 'react';
import {ArrowRight, Plus, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import CustomModal from 'components/common/modal';
import Addmemberform from './Addmemberform';
import {createMember, getMembers} from 'containers/members/api';
let timeout;

const Member = () => {
  const [membersList, setmembersList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedmembers, setSelectedmembers] = useState(0);
  const [ismemberModalVisible, setmemberIsModalVisible] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  console.log(loading);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = (callback, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
  const handleSetSearchQuery = value => {
    setMeta(pre => ({...pre, search: value}));
    debounceFn(handleRefreshPage, DEBOUNCE_DELAY);
  };
  const handlePageChange = value => {
    setMeta(pre => ({...pre, page: value}));
    handleRefreshPage();
  };
  const handleRefreshPage = () => {
    setRefreshPage(pre => !pre);
  };

  const handlememberSubmission = async member => {
    try {
      const result = await createMember(member);
      if (result) {
        handleClosememberModal();
        handleRefreshPage();
      }
    } catch (error) {
      console.log(error);
    }
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
  const fetchMembers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getMembers(meta);
      console.log('memebers', result);
      if (result['members']) {
        const data = result?.members.map(item => ({...item, checked: selectAll}));
        setmembersList(data);
        setTotalCount(result?.meta.total_count);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPage]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

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
        totalListCount={totalCount}
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
                    <td>{member.date_of_birth}</td>
                    <td>{member.city}</td>
                    <td>{member.cin}</td>
                    <td>{member.mif}</td>
                    <td>{member.account_number}</td>
                    <td>
                      <div className={`status ${member.mif_status === 'active' ? 'active' : 'inactive'}`}>
                        {member.mif_status}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`status ${
                          member.enrollment_status === 'Enrolled'
                            ? 'Enrolled'
                            : member.enrollment_status === 'Excluded'
                            ? 'Excluded'
                            : 'pending'
                        }`}
                      >
                        {member.enrollment_status}
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
        <CustomModal size="sm" show onHide={handleClosememberModal} heading="Add Member">
          <Addmemberform handleQuestionSubmittion={handlememberSubmission} handleClose={handleClosememberModal} />
        </CustomModal>
      )}
    </>
  );
};

export default Member;

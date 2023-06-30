import React, {useCallback, useEffect, useState} from 'react';
import {Pencil, Plus, Trash, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import CustomModal from 'components/common/modal';
import CareManagerForm from './CareManagerForm';
import {
  createLeadCareManager,
  deleteLeadCareManager,
  getLeadCareManagers,
  updateLeadCareManager,
} from 'containers/leadcaremanager/api';
let timeout;
const Leadcaremanagers = () => {
  // const MAX_CAPACITY = 49;
  const [managersList, setManagersList] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedManagers, setSelectedManagers] = useState(0);
  const [isManagerModalVisible, setIsManagerModalVisible] = useState(false);
  const [currentLeadCareManagerEdit, setCurrentLeadCareManagerEdit] = useState('');
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

  const handleManagerSubmission = async manager => {
    try {
      if (typeof currentLeadCareManagerEdit === 'object') {
        const {id} = manager;
        const result = await updateLeadCareManager(manager, id);
        if (result) {
          handleCloseManagerModal();
          handleRefreshPage();
        }
      } else {
        const result = await createLeadCareManager(manager);
        if (result) {
          handleCloseManagerModal();
          handleRefreshPage();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteLeadCareManager = async id => {
    const result = await deleteLeadCareManager(id);
    if (result) handleRefreshPage();
  };
  const handleSelectAll = () => {
    const updatedCheckboxes = managersList.map(checkbox => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setManagersList(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = index => {
    setManagersList(prevList =>
      prevList.map((item, itemIndex) => (itemIndex === index ? {...item, checked: !item.checked} : item)),
    );
  };

  const handleCloseManagerModal = () => {
    setIsManagerModalVisible(false);
    setCurrentLeadCareManagerEdit('');
  };
  const handleOpenManagerModal = () => {
    setIsManagerModalVisible(true);
  };
  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getLeadCareManagers(meta);
      if (result['lead_care_managers']) {
        const data = result?.lead_care_managers.map(item => ({...item, checked: selectAll}));
        setManagersList(data);
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
    fetchQuestions();
  }, [fetchQuestions]);
  useEffect(() => {
    setSelectedManagers(
      selectAll
        ? managersList.length
        : managersList?.reduce((accumulator, item) => {
            if (item.checked) {
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [managersList, selectAll]);

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
        selectedItems={selectedManagers}
        actionButtons={
          selectedManagers > 0
            ? [
                {
                  label: `Delete ${selectedManagers} Items`,
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
                  label: 'Add Lead Care Manager',
                  classes: 'primary-btn',
                  icon: <Plus size={24} className="me-3" />,
                  handleClick: () => {
                    console.log('clicked');

                    handleOpenManagerModal();
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
                  <th>Email</th>
                  <th>Location</th>
                  <th>Capacity Limit</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {managersList?.map((manager, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check ps-3 mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={manager.checked}
                          onChange={() => handleCheckboxChange(index)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>
                      {manager.name} , {manager.care_coordinator_name}
                    </td>
                    <td>{manager.email}</td>
                    <td>{manager.location}</td>
                    <td>{`${manager.capacity}`}</td>
                    <td>{manager.dateCreated}</td>

                    <td>
                      <Pencil
                        size={24}
                        className="opacity-50"
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                          setCurrentLeadCareManagerEdit(manager);
                          handleOpenManagerModal();
                        }}
                      />
                      <Trash
                        size={24}
                        className="ms-3 opacity-50"
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                          manager?.id && handleDeleteLeadCareManager(manager.id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TableWrapper>
      {isManagerModalVisible && (
        <CustomModal
          size="sm"
          show
          onHide={handleCloseManagerModal}
          heading={`${currentLeadCareManagerEdit ? 'Edit' : 'Add'} Lead Care Manager`}
        >
          <CareManagerForm
            handleQuestionSubmittion={handleManagerSubmission}
            handleClose={handleCloseManagerModal}
            currentLeadCareManagerEdit={currentLeadCareManagerEdit}
          />
        </CustomModal>
      )}
    </>
  );
};

export default Leadcaremanagers;

import React, {useCallback, useEffect, useState} from 'react';
import {Pencil, Plus, Trash, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import Addmanagerform from './Addmanagerform';

const Leadcaremanagers = () => {
  const [managersList, setManagersList] = useState([
    {
      name: 'Watson Jhonson',
      email: 'watsonjhonson@gamil.com',
      location: 'Titanium Northren California',
      capacitylimit: '5/49',
      dateCreated: 'Apr 3, 2023',
      checked: false,
    },
    {
      name: 'Watson Jhonson',
      email: 'watsonjhonson@gamil.com',
      location: 'Titanium Northren California',
      capacitylimit: '5/49',
      dateCreated: 'Apr 3, 2023',
      checked: false,
    },
    {
      name: 'Watson Jhonson',
      email: 'watsonjhonson@gamil.com',
      location: 'Titanium Northren California',
      capacitylimit: '5/49',
      dateCreated: 'Apr 3, 2023',
      checked: false,
    },
  ]);

  const MAX_CAPACITY = 49;

  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedManagers, setSelectedManagers] = useState(0);
  const [isManagerModalVisible, setIsManagerModalVisible] = useState(false);
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

  const handleManagerSubmission = manager => {
    setManagersList(prevList => [
      ...prevList,
      {
        name: manager.name,
        careCoordinatorName: manager.careCoordinatorName,
        email: manager.email,
        location: manager.location,
        capacitylimit: `${manager.capacitylimit}/${MAX_CAPACITY}`,
        dateCreated: 'Apr 3, 2023',
        checked: false,
      },
    ]);
    handleCloseManagerModal();
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
  };
  const handleOpenManagerModal = () => {
    setIsManagerModalVisible(true);
  };

  useEffect(() => {
    setSelectedManagers(
      selectAll
        ? managersList.length
        : managersList.reduce((accumulator, item) => {
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
        totalListCount={100}
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
                {managersList.map((manager, index) => (
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
                      {manager.name} , {manager.careCoordinatorName}
                    </td>
                    <td>{manager.email}</td>
                    <td>{manager.location}</td>
                    <td>{`${manager.capacitylimit}`}</td>
                    <td>{manager.dateCreated}</td>

                    <td>
                      <Pencil size={24} className="opacity-50" />
                      <Trash size={24} className="ms-3 opacity-50" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TableWrapper>
      {isManagerModalVisible && (
        <CustomModal size="sm" show onHide={handleCloseManagerModal} heading="Add Question">
          <Addmanagerform handleQuestionSubmittion={handleManagerSubmission} handleClose={handleCloseManagerModal} />
        </CustomModal>
      )}
    </>
  );
};

export default Leadcaremanagers;

import React, {useCallback, useEffect, useState} from 'react';
import {Pencil, Trash, Plus, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import Addoutreachstafform from './Addoutreachstafform';

const Outreachstaff = () => {
  const [outreachstaffList, setoutreachstaffList] = useState([
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      outreachleader: 'dawid watson',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
      checked: false,
    },
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      outreachleader: 'dawid watson',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
      checked: false,
    },
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      outreachleader: 'dawid watson',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
      checked: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedoutreachstaff, setSelectedoutreachstaff] = useState(0);
  const [isoutreachstaffModalVisible, setoutreachstaffModalVisible] = useState(false);
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

  const handleoutreachstaffSubmission = outreachstaff => {
    setoutreachstaffList(prevList => [
      ...prevList,
      {
        name: outreachstaff.name,
        Email: outreachstaff.email,
        Username: outreachstaff.username,
        outreachleader: outreachstaff.outreachleader,
        Lastlogin: outreachstaff.lastLogin,
        Datecreated: outreachstaff.dateCreated,
        checked: false,
      },
    ]);
    handleCloseoutreachstaffModal();
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = outreachstaffList.map(checkbox => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setoutreachstaffList(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = index => {
    setoutreachstaffList(prevList =>
      prevList.map((item, itemIndex) => (itemIndex === index ? {...item, checked: !item.checked} : item)),
    );
  };

  const handleCloseoutreachstaffModal = () => {
    setoutreachstaffModalVisible(false);
  };

  const handleopenoutreachstaffModal = () => {
    setoutreachstaffModalVisible(true);
  };

  useEffect(() => {
    setSelectedoutreachstaff(
      selectAll
        ? outreachstaffList.length
        : outreachstaffList.reduce((accumulator, item) => {
            if (item.checked) {
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [outreachstaffList, selectAll]);

  const handleDeleteSelectedItems = () => {
    const updatedList = outreachstaffList.filter(item => !item.checked);
    setoutreachstaffList(updatedList);
    setSelectAll(false);
  };

  const handleUploadFile = () => {
    // Implement file upload logic here
  };

  return (
    <>
      <TableWrapper
        searchPlaceholder="Search Outreach Staff"
        setSearhQuery={handleSetSearchQuery}
        searchValue={meta.search}
        totalListCount={100}
        pageSize={meta.perPage}
        currentPage={meta.page}
        onPageChange={handlePageChange}
        selectedItems={selectedoutreachstaff}
        actionButtons={
          selectedoutreachstaff > 0
            ? [
                {
                  label: `Delete ${selectedoutreachstaff} Items`,
                  classes: 'danger-btn',
                  icon: <TrashSimple size={24} className="me-3" />,
                  handleClick: handleDeleteSelectedItems,
                },
              ]
            : [
                {
                  label: 'Upload File',
                  classes: 'secondary-btn',
                  icon: <UploadSimple size={24} className="me-3" />,
                  handleClick: handleUploadFile,
                },
                {
                  label: 'Add outreachstaff',
                  classes: 'primary-btn',
                  icon: <Plus size={24} className="me-3" />,
                  handleClick: handleopenoutreachstaffModal,
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
                  <th>UserName</th>
                  <th>Outreach leader</th>
                  <th>Last login</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {outreachstaffList.map((outreachstaff, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check ps-3 mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={outreachstaff.checked}
                          onChange={() => handleCheckboxChange(index)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>{outreachstaff.name}</td>
                    <td>{outreachstaff.Email}</td>
                    <td>{outreachstaff.Username}</td>
                    <td>{outreachstaff.outreachleader}</td>
                    <td>{outreachstaff.Lastlogin}</td>
                    <td>{outreachstaff.Datecreated}</td>
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
      {isoutreachstaffModalVisible && (
        <CustomModal size="sm" show onHide={handleCloseoutreachstaffModal} heading="Add Outreach Staff">
          <Addoutreachstafform
            handleQuestionSubmittion={handleoutreachstaffSubmission} // <-- Use handleQuestionSubmittion
            handleClose={handleCloseoutreachstaffModal}
          />
        </CustomModal>
      )}
    </>
  );
};

export default Outreachstaff;

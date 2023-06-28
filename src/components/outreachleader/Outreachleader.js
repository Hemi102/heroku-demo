import React, {useCallback, useEffect, useState} from 'react';
import {Pencil, Trash, Plus, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import {debounce} from 'lodash';
import CustomModal from 'components/common/modal';
import Addoutreachleaderform from './Addoutreachleaderform';

const Outreachleader = () => {
  const [outreachleaderList, setoutreachleaderList] = useState([
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
    },
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
    },
    {
      name: 'James Jhones',
      Email: 'jhones@gmail.com',
      Username: 'James',
      Lastlogin: 'May 27, 2023, 15:42 GMT',
      Datecreated: 'Dec 10, 2023',
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedoutreachleader, setSelectedoutreachleader] = useState(0);
  const [isoutreachleaderModalVisible, setoutreachleaderIsModalVisible] = useState(false);
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

  const handleoutreachleaderSubmission = outreachleader => {
    setoutreachleaderList(prevList => [
      ...prevList,
      {
        name: outreachleader.name,
        Email: outreachleader.email,
        Username: outreachleader.Username,
        Lastlogin: outreachleader.Lastlogin,
        Datecreated: outreachleader.Datecreated,
        checked: false,
      },
    ]);
    handleCloseoutreachleaderModal();
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = outreachleaderList.map(checkbox => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setoutreachleaderList(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = index => {
    setoutreachleaderList(prevList =>
      prevList.map((item, itemIndex) => (itemIndex === index ? {...item, checked: !item.checked} : item)),
    );
  };

  const handleCloseoutreachleaderModal = () => {
    setoutreachleaderIsModalVisible(false);
  };

  const handleOpenmemberModal = () => {
    setoutreachleaderIsModalVisible(true);
  };

  useEffect(() => {
    setSelectedoutreachleader(
      selectAll
        ? outreachleaderList.length
        : outreachleaderList.reduce((accumulator, item) => {
            if (item.checked) {
              return accumulator + 1;
            } else return accumulator;
          }, 0),
    );
  }, [outreachleaderList, selectAll]);

  return (
    <>
      <TableWrapper
        searchPlaceholder="Search Outreach leader"
        setSearhQuery={handleSetSearchQuery}
        searchValue={meta.search}
        totalListCount={100}
        pageSize={meta.perPage}
        currentPage={meta.page}
        onPageChange={handlePageChange}
        selectedItems={selectedoutreachleader}
        actionButtons={
          selectedoutreachleader > 0
            ? [
                {
                  label: `Delete ${selectedoutreachleader} Items`,
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
                  label: 'Add Outreachleader',
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
                  <th>Email</th>
                  <th>UserName</th>
                  <th>Last login</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {outreachleaderList.map((outreachleader, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check ps-3 mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={outreachleader.checked}
                          onChange={() => handleCheckboxChange(index)}
                          value=""
                        />
                      </div>
                    </td>
                    <td>{outreachleader.name}</td>
                    <td>{outreachleader.Email}</td>
                    <td>{outreachleader.Username}</td>
                    <td>{outreachleader.Lastlogin}</td>
                    <td>{outreachleader.Datecreated}</td>
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
      {isoutreachleaderModalVisible && (
        <CustomModal size="sm" show onHide={handleCloseoutreachleaderModal} heading="Add Question">
          <Addoutreachleaderform
            handleQuestionSubmittion={handleoutreachleaderSubmission}
            handleClose={handleCloseoutreachleaderModal}
          />
        </CustomModal>
      )}
    </>
  );
};

export default Outreachleader;

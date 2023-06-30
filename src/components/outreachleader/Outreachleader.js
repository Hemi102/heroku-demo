import React, {useCallback, useEffect, useState} from 'react';
import {Pencil, Trash, Plus, TrashSimple, UploadSimple} from 'phosphor-react';
import TableWrapper from 'components/common/table-wrapper';
import {DEBOUNCE_DELAY, initialMetaForTable} from 'constants/common';
import CustomModal from 'components/common/modal';
import OutreachForm from './OutreachLeaderForm';
import {
  createOutreachLeader,
  deleteOutreachLeader,
  getOutreachLeaders,
  updateOutreachLeader,
} from 'containers/outreachleaders/api';
let timeout;

const Outreachleader = () => {
  const [outreachleaderList, setoutreachleaderList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [meta, setMeta] = useState(initialMetaForTable);
  const [loading, setLoading] = useState(true);
  const [selectedoutreachleader, setSelectedoutreachleader] = useState(0);
  const [isoutreachleaderModalVisible, setoutreachleaderIsModalVisible] = useState(false);
  const [currentOutreachLeeaderEdit, setCurrentOutreachLeeaderEdit] = useState('');
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
  const handleoutreachleaderSubmission = async manager => {
    try {
      if (typeof currentOutreachLeeaderEdit === 'object') {
        const {id} = manager;
        const result = await updateOutreachLeader(manager, id);
        if (result) {
          handleCloseoutreachleaderModal();
          handleRefreshPage();
        }
      } else {
        const result = await createOutreachLeader({outreach_leader: {...manager}});
        if (result) {
          handleCloseoutreachleaderModal();
          handleRefreshPage();
        }
      }
    } catch (error) {
      console.log(error);
    }
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
    setCurrentOutreachLeeaderEdit('');
  };

  const handleOpenmemberModal = () => {
    setoutreachleaderIsModalVisible(true);
  };
  const handleDeleteOutreachLeader = async id => {
    const result = await deleteOutreachLeader(id);
    if (result) handleRefreshPage();
  };
  const fetchOutreachLeaders = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getOutreachLeaders(meta);
      console.log('outreach leaders are', result);
      if (result['outreach_leaders']) {
        const data = result?.outreach_leaders.map(item => ({...item, checked: selectAll}));
        setoutreachleaderList(data);
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
    fetchOutreachLeaders();
  }, [fetchOutreachLeaders]);
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
        totalListCount={totalCount}
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
                    <td>{`${outreachleader.full_name}`}</td>
                    <td>{outreachleader.email}</td>
                    <td>{outreachleader.full_name}</td>
                    <td>{outreachleader.Lastlogin}</td>
                    <td>{outreachleader.Datecreated}</td>
                    <td>
                      <Pencil
                        size={24}
                        className="opacity-50"
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                          setCurrentOutreachLeeaderEdit(outreachleader);
                          handleOpenmemberModal();
                        }}
                      />
                      <Trash
                        size={24}
                        className="ms-3 opacity-50"
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                          outreachleader?.id && handleDeleteOutreachLeader(outreachleader.id);
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
      {isoutreachleaderModalVisible && (
        <CustomModal
          size="sm"
          show
          onHide={handleCloseoutreachleaderModal}
          heading={`${currentOutreachLeeaderEdit ? 'Edit' : 'Add'} Lead Care Manager`}
        >
          <OutreachForm
            handleQuestionSubmittion={handleoutreachleaderSubmission}
            handleClose={handleCloseoutreachleaderModal}
            currentOutreachLeeaderEdit={currentOutreachLeeaderEdit}
          />
        </CustomModal>
      )}
    </>
  );
};

export default Outreachleader;

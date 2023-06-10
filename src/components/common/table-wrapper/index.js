import React from 'react';
import Pagination from './pagination';
import SearchInput from './search-input';
import './index.scss';
const TableWrapper = ({
  searchPlaceholder,
  searchValue,
  setSearhQuery,
  actionButtons,
  selectedItems,
  currentPage,
  pageSize,
  totalListCount,
  onPageChange,
  children,
}) => {
  return (
    <>
      <div className="table-main">
        <div className="table-head-content">
          <div className="search-otr">
            {selectedItems > 0 ? (
              <span className="selected-items-otr">{`${selectedItems} items selected`}</span>
            ) : (
              <SearchInput placeholder={searchPlaceholder} value={searchValue} handleChange={setSearhQuery} />
            )}
            {actionButtons?.length > 0 &&
              actionButtons.map((item, index) => {
                return (
                  <button key={item.label + index} index={index} className={item.classes} onClick={item.handleClick}>
                    {item?.icon && item.icon}
                    {item.label}
                  </button>
                );
              })}
            {searchValue && (
              <p className="search-result">
                {`Showing ${totalListCount} for `}
                <span className="search-value">{searchValue}</span>
              </p>
            )}
          </div>
        </div>
        <div className="table-otr">
          {children}
          <div className="footer-table">
            <div className="d-flex align-items-center">
              <div className="text-otr mx-3">
                <p className="entity-text heading-xs">
                  {`Showing ${(currentPage - 1) * pageSize + 1} to ${
                    (currentPage - 1) * pageSize > totalListCount ? totalListCount : currentPage * pageSize
                  } of ${totalListCount} Entries`}
                </p>
              </div>
            </div>
            <Pagination
              itemsCount={totalListCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableWrapper;

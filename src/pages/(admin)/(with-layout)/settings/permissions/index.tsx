import { useRoleQuery } from "@/hooks/query/role-query";
import { DataTable } from "../../list/components/data-table";
import { Code, type ResponseData, type RoleModel } from "@/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, ColGroupDef, GridReadyEvent, IServerSideDatasource } from "ag-grid-enterprise";
import { getRole } from "@/api/services/RoleService";
import { Checkbox } from "@/components/ui/checkbox";

export function Component() {
  // const request = useRoleQuery()
  // const [data, setData] = useState<RoleModel[]>([])
  // if (request.isFetched && request.data?.code == Code._200) {
  //   setData(request.data?.data as RoleModel[])
  // }
  const gridContainerRef = useRef(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: 'calc(100vh - 284px)' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '800px' }), []);
  const defaultPageSize = 20 as number;
  const gridRef = useRef<AgGridReact<RoleModel>>(null);
  const getRowId = useMemo(() => {
    return (params: any) => `${params.data.id}`;
  }, []);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      // minWidth: 90,
      resizable: true,
      // enableCellChangeFlash: true,
      suppressMenu: true,
      sortable: false,
      editable: false,
    };
  }, []);
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: 'id',
      maxWidth: 40,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      // headerCheckboxSelectionCurrentPageOnly: true,
      headerName: "",
      pinned: true,
      resizable: false,
      suppressMovable: true,
      lockPosition: true,
      editable: false,
      cellStyle: {
        lineHeight: '50px'
      },
      cellRendererParams: (params) => {
        console.log(params);
      },
      cellRenderer: (params: any) => {
        console.log(gridRef.current);
        return (
          <Checkbox
            defaultChecked={params.node.selected}
            // checked={table.getIsAllPageRowsSelected() ||
            //   (table.getIsSomePageRowsSelected() && "indeterminate")}
            // onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            onCheckedChange={(value) => params.node.setSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        )
      }
    },
    {
      field: 'STT',
      headerName: "STT",
      colId: 'STT',
      width: 60,
      maxWidth: 60,
      cellRenderer: (data: any) => {
        return <span>{data.node.rowIndex + 1}</span>
      },
      cellStyle: {
        lineHeight: '50px'
      }
    },

    {
      headerName: 'Mã',
      field: 'code',
      colId: 'code',
      width: 200,
      cellStyle: {
        lineHeight: '50px'
      }
    },
    {
      field: 'action',
      headerName: "Thao tác",
      colId: 'action',
      width: 150,
      editable: false,
      cellStyle: (params: any) => {
        return {
          textAlign: 'right',
          lineHeight: '50px'
        };
      },
      cellRenderer: ({ data: record }: { data: RoleModel }) => {
        return (
          <></>
        )
      }
    },
  ]);
  const onGridReady = useCallback(async (params: GridReadyEvent) => {

    //chỗ này tiến hành lấy dự liệu về fill vào table
    const datasource = getServerSideDatasource(getData);
    params.api!.setGridOption('serverSideDatasource', datasource);

  }, []);

  const getServerSideDatasource: (server: (skip: number, limit: number) => Promise<any>) => IServerSideDatasource = (
    server: any
  ) => {
    return {
      getRows: async (params: any) => {
        // console.log('[Datasource] - rows requested by grid: ', params.request);
        const skip = params.request.startRow ?? 0;
        const take = (params.request.endRow ?? 0) - (params.request.startRow ?? 0);
        const response = await server(skip, take);
        // adding delay to simulate real server call
        setTimeout(function () {
          // if (response.success) {
          // eslint-disable-next-line no-constant-condition
          if (response && response.code === 200) {
            console.log(response)
            // call the success callback
            params.success({
              rowData: response.data,
              // rowCount: response.totalCount,
              // rowData: [],
              rowCount: 10
            });
          } else {
            // inform the grid request failed
            params.fail();
          }
        }, 0);
      },
    };
  };

  /**
   * get data from api
   * @param skip 
   * @param limit 
   * @returns 
   */
  const getData = async (skip: number, limit: number) => {

    let pageCal = (skip / limit) + 1
    // const params = {
    //     page: pageCal,
    //     size: limit,
    //     TextSearch: '',
    // };
    // const response = await fetch(`${url}/Customer?filter=${JSON.stringify(params)}`)
    // fieldsValue.size = limit;
    // fieldsValue.page = pageCal;
    // const filterModel = {
    //     ...fieldsValue,
    //     customerId: params.id
    // }


    // fieldsValue.isAdmin = isAdmin


    const response: ResponseData = await getRole() as ResponseData<RoleModel[]>
    return response;
  }
  const changePagination = (event: any) => {
    // console.log(event)
    if (event.newPage) {
      const currentPage = gridRef.current?.api.paginationGetCurrentPage();
      // console.log(currentPage)
      //if (this.data.rowData.length <= (currentPage * 10)) {

      //}
    }

    //khi chọn page size mới
    if (event.newPageSize) {
      const currentPageSize = gridRef.current?.api.paginationGetPageSize();

      gridRef.current?.api.setGridOption('paginationPageSize', currentPageSize);
      gridRef.current?.api.setGridOption('cacheBlockSize', currentPageSize);
    }
  }

  return (
    <div>
      <div className="tableViewContainer" ref={gridContainerRef}>
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-balham">
            <AgGridReact<RoleModel>
              ref={gridRef}
              rowHeight={50}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowModelType={'serverSide'}
              pagination={true}
              headerHeight={40}
              // statusBar={statusBar}
              // suppressPaginationPanel={true}
              paginationPageSize={defaultPageSize}
              rowSelection={'multiple'}
              getRowId={getRowId}
              cacheBlockSize={defaultPageSize}
              animateRows={true}
              suppressRowClickSelection={true}
              suppressContextMenu={true}
              onGridReady={onGridReady}
              // editType={'fullRow'}
              // onCellEditingStopped={editCell}
              onPaginationChanged={changePagination}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  )
}

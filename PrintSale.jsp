
<%@page import="java.util.List"%>
<%@page import="co.smarthand.smartehr.Beans.InvoiceBean"%>
<%@page import="co.smarthand.smartehr.JavaClasses.Validator"%>
<%@page import="co.smarthand.smartehr.DAO.SaleDao"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/style/PrintSale.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/Bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./ticket.css">
    <link rel="stylesheet" href="../assets/bootstrap_mix/bootstrap_5_2_2/css/bootstrap.min.css">
    <title>Document</title>
</head>

<body class=" container-fluid mx-0 m-0 p-0 border">
    <%
            final String userLanguage = session.getAttribute("userLanguage").toString(); // get userlanguage from session
            final String username = session.getAttribute("username").toString();
            final String clinicName = session.getAttribute("CLINIC_NAME").toString();
            final String prefixUrl = session.getAttribute("prefixUrl").toString();
            final Validator validator = new Validator();
            int invoiceId;
            InvoiceBean invoice;
            List<InvoiceBean> invoiceItems;
            
            if (request.getParameter("invoiceId") == null
                    || !validator.isNumberValid(request.getParameter("invoiceId"))) {
                response.sendRedirect(prefixUrl + "/Sales");
                return;
            }
            
            
            invoiceId = Integer.parseInt(request.getParameter("invoiceId"));

            invoice = new InvoiceBean();
            invoice.setInvoiceId(invoiceId);
            invoice.setUserLang(userLanguage);

            invoiceItems = SaleDao.getInstance().getInvoicesDrugItemsDetail(invoice);
            invoice = SaleDao.getInstance().getInvoiceDetail(invoice);

            if (invoice == null) {
                response.sendRedirect(prefixUrl + "/Sales");
                return;
            }

        %>
    <div class="row mx-0 m-0 p-0">
        <div class="col-12 dis-flex-center">
            <img class="img-fluid smart-logo-" src="./Logo.jpg" alt="">
        </div>
        <div class="col-12 dis-flex-center p-2">
            <%= clinicName %>
        </div>

        <div class="col-12 dis-flex-center border border-bottom-0 p-1">
            Invoice : <%= invoice.getInvoiceId() %>
        </div>
        <div class="col-12 dis-flex-center border  border-bottom-0 p-1">
            Date : <%= invoice.getInvoiceDate() %>
        </div>
        <div class="col-12 dis-flex-center border  border-bottom-0 p-1">
            Patient Name : <%= invoice.getPatien() %>
        </div>
        <div class="row p-0 m-0 cust-font-size" dir="rtl">
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center">
                Total
            </div>
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center">
                Price
            </div>
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center">
                Quantity
            </div>
            <div class="col-5 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center">
                Drug Name
            </div>
            <div class="col-1 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center">
                #
            </div>
        </div>

        <div class="row p-0 m-0 cust-font-size" dir="rtl">
            <%
                    int i = 1;
                    for(InvoiceBean invoiceItem : invoiceItems){ 
                    
                %>
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center p-1" dir="ltr">
                <%= (Float.parseFloat(invoiceItem.getQuantity()[0]) * Float.parseFloat(invoiceItem.getSellPrice()[0])) + " ID" %>
            </div>
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center p-1" dir="ltr">
                <%= invoiceItem.getSellPrice()[0] %> ID
            </div>
            <div class="col-2 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center p-1">
                <%= invoiceItem.getQuantity()[0] %>
            </div>
            <div class="col-5 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center p-1">
                <%= invoiceItem.getDrugName()[0] %>
            </div>
            <div class="col-1 mx-0 m-0 p-0 border  border-bottom-0 dis-flex-center p-1">
                <%= i++ %>
            </div>
            <%}%>
                

            </div>
            <div class="row p-0 m-0 border-top">
                <div class="col-6 border dis-flex-center">
                    Total Price :
                </div>
                <div class="col-6 border dis-flex-center">
                    <%= invoice.getTotalPrice() %> ID
        </div>
    </div>
    <div class="row p-0 m-0 border-top">
        <div class="col-6 border dis-flex-center">
            Casher :
        </div>
        <div class="col-6 border dis-flex-center">
            <%= username %>
        </div>
    </div>


    </div>
</body>

</html>
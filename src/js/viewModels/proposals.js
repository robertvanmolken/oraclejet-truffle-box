/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your Proposals ViewModel code goes here
 */
define(['text!../Ballot.json', 'ojs/ojcore', 'knockout', 'jquery', 'web3'],
  function (file, oj, ko, $, web) {

    function ProposalsViewModel() {
      var self = this;
      var content = JSON.parse(file);
      var web3js;

      if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
      } else {
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }

      var ballotContract = web3js.eth.contract(content.abi);
      var ballot = ballotContract.at('0x345ca3e014aaf5dca488057592ee47305d9b3e10');
      self.proposals = ko.observable("<li>Empty list</li>");

      ballot.getProposals(function (error, result) {
        if (!error) {
          var names = result;
          var proposalNames = "";
          for (i=0;i<names.length;i++) {
            names[i] = web3js.toAscii(names[i]);
            proposalNames = proposalNames + "<li>"+ names[i] + "</li>" + '\n';
          }

          document.getElementById('list1').innerHTML = proposalNames;
          console.log(names);
        } else {
          console.log(error);
        }
      });

      //self.version = proposals;


      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new ProposalsViewModel();
  }
);

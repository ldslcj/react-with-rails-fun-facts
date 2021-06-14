class Api::FactsController < ApplicationController
    before_action :set_fact, only: [:show, :update, :delete]
    def index
        render json: Fact.all
    end

    def show
        render json: @fact
    end

    def create
        @fact = Fact.new(fact_params)
        if(@fact.save)
            render json: @fact
        else
            render json: {errors: @fact.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        if(@fact.update(fact_params))
            render json: @fact
        else
            render json: {errors: @fact.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def delete
    end

    private

    def fact_params
        params.require(:fact).permit(:text, :stars, :username, :source)
    end


    def set_fact
        @fact = Fact.find(params[:id])
    end

    



end
